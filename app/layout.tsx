import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/content";

const inter = Inter({ subsets: ["latin"] });

// ⚠️ PRODUCTION_URL 設定
// 請將此處改為你實際的 GitHub Pages 網址 (務必包含最後的斜線)
// 例如: https://arc-ark.github.io/concierge-studio/
const PRODUCTION_URL = "https://arc-ark.github.io/concierge-studio/";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // 設定 Base URL，讓相對路徑能正確解析
  metadataBase: new URL(PRODUCTION_URL), 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PRODUCTION_URL,
    siteName: siteConfig.name,
    images: [
      {
        // ✅ 修正點：移除開頭的 "/"，變成相對路徑
        // Next.js 會自動將其解析為: ${metadataBase}/og-preview.png
        // 即: https://.../your-repo-name/og-preview.png
        url: "og-preview.png", 
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
