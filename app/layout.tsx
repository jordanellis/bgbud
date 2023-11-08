"use client";

import { Metadata } from "next";
import "./globals.css";
import { Anchor, Button } from "../components";
import { HomeIcon, MenuIcon, PuzzlePieceIcon, UsersIcon } from "../icons";
import { NavigationEvents } from "../components/NavigationEvents";
import "nprogress/nprogress.css";
import { SideMenu } from "../components/SideMenu";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Board Game Bud",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <html>
      <body className="bg-primary-bg">
        <header className="bg-primary-card-bg text-primary-text p-3 flex gap-4">
          <Button
            className="my-auto"
            variant="icon"
            onClick={() => setIsSideNavOpen(true)}
          >
            <MenuIcon />
          </Button>
          <Anchor className="my-auto" to="/">
            <h1 className="text-h2 text-zinger-default">Board Game Bud</h1>
          </Anchor>
        </header>
        <main className="p-3">
          <NavigationEvents>{children}</NavigationEvents>
        </main>
        <SideMenu
          open={isSideNavOpen}
          onClose={() => setIsSideNavOpen(false)}
          className="flex flex-col gap-4"
        >
          <Anchor
            className="my-auto text-h4"
            to="/"
            onClick={() => setIsSideNavOpen(false)}
          >
            <div className="flex gap-3">
              <div className="w-8">
                <HomeIcon />
              </div>
              Home
            </div>
          </Anchor>
          <Anchor
            className="my-auto text-h4"
            to="/games"
            onClick={() => setIsSideNavOpen(false)}
          >
            <div className="flex gap-3">
              <div className="w-8">
                <PuzzlePieceIcon />
              </div>
              Games
            </div>
          </Anchor>
          <Anchor
            className="my-auto text-h4"
            to="/players"
            onClick={() => setIsSideNavOpen(false)}
          >
            <div className="flex gap-3">
              <div className="w-8">
                <UsersIcon />
              </div>
              Players
            </div>
          </Anchor>
        </SideMenu>
      </body>
    </html>
  );
}
export default RootLayout;
