const isGithubPages = process.env.DEPLOY_TARGET === "GH_PAGES";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/<REPO_NAME>" : "",
  assetPrefix: isGithubPages ? "/<REPO_NAME>/" : "",
};

export default nextConfig;
