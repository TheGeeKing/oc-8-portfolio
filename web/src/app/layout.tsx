import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Viewport, type Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
  icons: [{ rel: "icon", url: "/portfolio.256x256.png" }],
};

export const viewport: Viewport = {
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${GeistSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-[#1f153d] to-[#15162c] text-white">
        {children}
      </body>
    </html>
  );
}
