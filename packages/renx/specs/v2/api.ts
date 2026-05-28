// @ts-nocheck

import { Renx } from "@renx/core"
import { ReadTool } from "@renx/core/tools"

const renx = Renx.make({})

renx.tool.add(ReadTool)

renx.tool.add({
  name: "bash",
  schema: {
    type: "object",
    properties: {
      command: {
        type: "string",
        description: "The command to run.",
      },
    },
    required: ["command"],
  },
  execute(input, ctx) {},
})

renx.auth.add({
  provider: "openai",
  type: "api",
  value: process.env.OPENAI_API_KEY,
})

renx.agent.add({
  name: "build",
  permissions: [],
  model: {
    id: "gpt-5-5",
    provider: "openai",
    variant: "xhigh",
  },
})

const sessionID = await renx.session.create({
  agent: "build",
})

renx.subscribe((event) => {
  console.log(event)
})

await renx.session.prompt({
  sessionID,
  text: "hey what is up",
})

await renx.session.prompt({
  sessionID,
  text: "what is up with this",
  files: [
    {
      mime: "image/png",
      uri: "data:image/png;base64,xxxx",
    },
  ],
})

await renx.session.wait()

console.log(await renx.session.messages(sessionID))
