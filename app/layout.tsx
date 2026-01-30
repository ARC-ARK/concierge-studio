import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/content";

const inter = Inter({ subsets: ["latin"] });

// ⚠️ TODO: 請務必修改這裡！
// 格式: https://<你的GitHub帳號>.github.io/<Repo名稱>
// 例如: https://johndoe.github.io/concierge-studio
const PRODUCTION_URL = "https://your-username.github.io/concierge-studio";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // 關鍵修正：設定正確的 Base URL，讓 OG Image 與 Canonical URL 能夠正確解析
  metadataBase: new URL(PRODUCTION_URL), 
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PRODUCTION_URL,
    siteName: siteConfig.name,
    // 這裡設為 relative path，Next.js 會自動用 metadataBase 補全
    // (前提是 public/ 資料夾下要有這張圖，若無可先註解掉 images)
    // images: [
    //   {
    //     url: "/og-preview.png", 
    //     width: 1200,
    //     height: 630,
    //     alt: siteConfig.name,
    //   },
    // ],
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
