export * from "./client.js"
export * from "./server.js"

import { createRenxClient } from "./client.js"
import { createRenxServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createRenx(options?: ServerOptions) {
  const server = await createRenxServer({
    ...options,
  })

  const client = createRenxClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
