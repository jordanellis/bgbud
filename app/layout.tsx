"use client";

import { Metadata } from "next";
import "./globals.css";
import { Anchor, Button } from "../components";
import { MenuIcon } from "../icons";
import { NavigationEvents } from "../components/NavigationEvents";
import "nprogress/nprogress.css";

export const metadata: Metadata = {
  title: "Board Game Bud",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="bg-primary-bg">
        <header className="bg-primary-card-bg text-primary-text p-3 flex gap-4">
          <Button className="my-auto" variant="icon">
            <MenuIcon />
          </Button>
          <Anchor className="my-auto" to="/">
            <h1 className="text-h2">Board Game Bud</h1>
          </Anchor>
        </header>
        <main className="p-3">
          <NavigationEvents>{children}</NavigationEvents>
        </main>
      </body>
    </html>
  );
}
export default RootLayout;
