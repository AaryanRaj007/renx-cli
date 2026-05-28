const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://renx.ai" : `https://${stage}.renx.ai`,
  console: stage === "production" ? "https://renx.ai/auth" : `https://${stage}.renx.ai/auth`,
  email: "contact@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/renx",
  discord: "https://renx.ai/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
