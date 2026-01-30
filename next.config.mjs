/** @type {import('next').NextConfig} */

// TODO: 如果你的 repo 網址是 https://user.github.io/my-project/
// 請將下方的 "my-project" 改成你的 repo 名稱
const repoName = "concierge-studio"; 

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export", // 關鍵：開啟靜態輸出
  images: {
    unoptimized: true, // 關鍵：GitHub Pages 不支援 Next.js 的圖片優化伺服器
  },
  // 只有在生產環境 (GitHub Pages) 且有 repo 名稱時才加上路徑前綴
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  trailingSlash: true, // 建議開啟，避免路徑結尾斜線造成的 404
};

export default nextConfig;
