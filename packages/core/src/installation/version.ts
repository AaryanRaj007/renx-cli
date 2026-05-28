declare global {
  const RENX_VERSION: string
  const RENX_CHANNEL: string
}

export const InstallationVersion = typeof RENX_VERSION === "string" ? RENX_VERSION : "local"
export const InstallationChannel = typeof RENX_CHANNEL === "string" ? RENX_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
