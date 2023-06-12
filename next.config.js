module.exports = {
	env: {
		SPREADSHEET_ID : process.env.SPREADSHEET_ID,
		SHEET_ID : process.env.SHEET_ID,
		CLIENT_EMAIL : process.env.CLIENT_EMAIL,
		PRIVATE_KEY : process.env.PRIVATE_KEY,

	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
			config.resolve.fallback.tls = false;
			config.resolve.fallback.net = false;
			config.resolve.fallback.child_process = false;
		}

		return config;
	},
};