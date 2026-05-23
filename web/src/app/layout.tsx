import "@/styles/globals.css";

import { SkillCardHintStorage } from "@/components/SkillCardHintStorage";
import { GeistSans } from "geist/font/sans";
import { type Viewport, type Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "./seo";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url.toString() }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/portfolio.256x256.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [{ url: "/portfolio.256x256.png" }],
  },
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
