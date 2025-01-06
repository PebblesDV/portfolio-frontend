import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import BackgroundParticles from "./components/backgroundParticles";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <Script
        defer
        src="https://umami.stanturner-dev.nl/script.js"
        data-website-id="85ed2e65-b709-44e4-830a-c8757498ccb6"
      ></Script>
      <body className="antialiased min-h-dvh relative container">
        <BackgroundParticles
          quantity={600}
          staticity={30}
          className="fixed inset-0 -z-10"
        ></BackgroundParticles>
        <Header />
        {children}
      </body>
    </html>
  );
}
