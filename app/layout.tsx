import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FridgeBite — Cook what you have",
  description: "Turn the ingredients in your fridge into your next favorite meal.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
