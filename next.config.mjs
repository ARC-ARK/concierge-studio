/** @type {import('next').NextConfig} */

// 再次確認這裡與你的 repo 名稱完全一致（包含大小寫）
const repoName = "concierge-studio";

// 修正判斷邏輯：如果在 GitHub Actions 環境下，也視為生產環境
const isProd = process.env.NODE_ENV === "production" || process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // 只有在確定是生產環境或 CI 環境時，才加上 repo 名稱前綴
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true,
};

export default nextConfig;
