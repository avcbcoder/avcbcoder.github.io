// const isGithubPages = process.env.DEPLOY_TARGET === "GH_PAGES";
const isGithubPages = true;

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/anverma" : "",
  assetPrefix: isGithubPages ? "/anverma/" : "",
};

export default nextConfig;
