import { $ } from "bun"

await $`bun ./scripts/copy-icons.ts ${process.env.RENX_CHANNEL ?? "dev"}`

await $`cd ../renx && bun script/build-node.ts`
