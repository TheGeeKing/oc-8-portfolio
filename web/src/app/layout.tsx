import "@/styles/globals.css";

import { SkillCardHintStorage } from "@/components/SkillCardHintStorage";
import { GeistSans } from "geist/font/sans";
import { type Viewport, type Metadata } from "next";
import Script from "next/script";

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
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            defer
            src="https://stats.mma.dev/script.js"
            data-website-id="839be2aa-964c-40f0-999e-89dad04eabcc"
            data-performance="true"
          />
          <Script
            defer
            src="https://stats.mma.dev/recorder.js"
            data-website-id="839be2aa-964c-40f0-999e-89dad04eabcc"
            data-sample-rate="1"
            data-mask-level="moderate"
            data-max-duration="1200000"
          />
        </>
      )}
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-[#1f153d] to-[#15162c] text-white">
        <SkillCardHintStorage />
        {children}
      </body>
    </html>
  );
}
