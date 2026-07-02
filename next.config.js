const repo = 'osher-calisthenics3';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isGithubActions ? `/${repo}` : '',
  assetPrefix: isGithubActions ? `/${repo}/` : '',
};
module.exports = nextConfig;
