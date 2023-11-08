import cache from "memory-cache";
import { GoogleSpreadsheet } from "google-spreadsheet";

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

export interface BGData {
	id: number;
	Date: Date;
	"Game Name": string;
	Players: string;
	Winner: string;
	Scores: string;
	"Co-op Success": string;
	Notes: string;
	"Spirit Island Extras": string;
}

export interface GameData {
	date: Date;
	players: Array<string>;
	winner: string;
	winningScore: number;
	coopWin: boolean;
	notes: string;
	siExtras: string;
}

async function retrieveSheetData() {
	const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

		await doc.useServiceAccountAuth({
			client_email: CLIENT_EMAIL,
			private_key: PRIVATE_KEY,
		});
		
		await doc.loadInfo();
		const sheet = doc.sheetsByIndex[0];
		const rows = await sheet.getRows();

		const numHeaders = sheet.headerValues.length;
		const data = rows.map((row, id) => {
			const dataRow = {id: id};
			for (let i = 0; i < numHeaders; i++) {
				dataRow[sheet.headerValues[i]] = row._rawData[i] ?? "";
			}
			return {...dataRow};
		});

		return data;
}

export async function fetchAllBGData(): Promise<BGData[]> {
	const CACHE = "bg-cache-data";
	const HOUR = 1000 * 60 * 60;

	const cacheResp = cache.get(CACHE);
	if (cacheResp) {
		return cacheResp;
	}
	try {
		const bgdata = await retrieveSheetData();
		cache.put(CACHE, bgdata, HOUR);
		return bgdata;
	} catch (err) {
		console.log(err);
		return [];
	}
}

export const skipPlayers = ["Ellis fam", "Stevens fam"];

export async function fetchAllUserBGData(): Promise<Array<{
	name: string,
	wins: number,
	plays: number,
}>> {
	const data = await fetchAllBGData();
	const arr = data.map(item => item.Players.split(", "));
	const allPlayers = Array.from(new Set(arr.flat(2))).filter(item => !skipPlayers.includes(item));
	const playerWinData = new Array<{ name: string, wins: number, plays: number }>;
	allPlayers.forEach(player => {
		playerWinData.push({name: player, wins: 0, plays: 0});
	});
	data.forEach(gamePlayed => {
		const players = gamePlayed.Players.split(", ").filter(players => !skipPlayers.includes(players));
		const winners = gamePlayed.Winner.length !== 0 ? gamePlayed.Winner : gamePlayed["Co-op Success"];
		players.forEach(player => {
			playerWinData.find((row, i) => {
				if (row.name === player) {
					if (winners.includes(player) || winners === "Win") {
						playerWinData[i] = { name: row.name, wins: row.wins+1, plays: row.plays+1 };
					} else {
						playerWinData[i] = { name: row.name, wins: row.wins, plays: row.plays+1 };
					}
					return true;
				}
			});
		});
	});
	playerWinData.sort((a, b) => {
		if ( a.wins > b.wins ){
			return -1;
		}
		if ( a.wins < b.wins ){
			return 1;
		}
		return 0;
	});
	return playerWinData;
}

export async function fetchAllGameBGData(): Promise<Array<{
	game: string,
	plays: number,
}>> {
	const data = await fetchAllBGData();
	
	const returnGameData = getGamePlayTotals(data);

	return returnGameData;
}

export function getGamePlayTotals(data: BGData[]) {
	const uniqueGames = Array.from(data.map(item => item["Game Name"].trim()).filter((game, i, a) => a.indexOf(game) === i));
	const returnGameData = new Array<{game: string, plays: number}>;
	uniqueGames.forEach(game => {
		const plays = data.reduce((acc, cur) => cur["Game Name"] === game ? ++acc : acc, 0);
		returnGameData.push({game, plays});
	});

	returnGameData.sort((a, b) => {
		if (a.plays < b.plays)
			return 1;
		if (a.plays > b.plays)
			return -1;
		if (a.game > b.game)
			return 1;
		if (a.game < b.game)
			return -1;
		return 0;
	});

	return returnGameData;
}

export async function fetchGameData(gameName: string): Promise<Array<GameData>> {
	const data = await fetchAllBGData();
	const rawGameData = data.filter(item => item["Game Name"].trim().includes(gameName));
	const gameData = new Array<GameData>;
	rawGameData.forEach((play) => {
		const playData: GameData = {
			date: play.Date,
			players: play.Players.split(", "),
			winner: play.Winner,
			winningScore: parseInt(play.Scores.split("-")[0]),
			coopWin: play["Co-op Success"].trim() == "Win",
			notes: play.Notes,
			siExtras: play["Spirit Island Extras"]
		};
		gameData.push(playData);
	});
	return gameData;
}

/*   Data format
{
 	id: 95,
 	Date: '05/27/22',
	'Game Name': 'Cryptid',
 	Players: 'Kellen, Sam, Jordan, Micah',
 	Winner: 'Kellen',
 	Scores: '',
 	'Co-op Success': '',
 	Notes: '',
 	'Spirit Island Extras': ''
}
*/
