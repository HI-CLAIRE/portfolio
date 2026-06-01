import type { NextConfig } from "next";

// GitHub Pages 배포 설정
// 저장소 이름이 'username.github.io'인 경우 basePath를 빈 문자열("")로 설정
// 그 외 저장소(예: 'portfolio')인 경우 '/저장소이름'으로 설정
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.endsWith(".github.io");
const basePath = isUserSite || !repoName ? "" : `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true, // GitHub Pages는 Next.js Image Optimization을 지원하지 않음
  },
  trailingSlash: true,
};

export default nextConfig;
