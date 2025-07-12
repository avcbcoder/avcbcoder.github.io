const isGithubPages = process.env.DEPLOY_TARGET === "GH_PAGES";
// const isGithubPages = true;

const nextConfig = {
  // output: "export",
  output: isGithubPages ? "export" : undefined,
  images: {
    unoptimized: true, // disable image optimization
  },
  basePath: isGithubPages ? "/anverma" : "",
  assetPrefix: isGithubPages ? "/anverma/" : "",
};

export default nextConfig;
