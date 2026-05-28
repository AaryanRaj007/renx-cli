import { Config } from "effect"
import { InstallationChannel } from "../installation/version"

function truthy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "true" || value === "1"
}

function falsy(key: string) {
  const value = process.env[key]?.toLowerCase()
  return value === "false" || value === "0"
}

// Channels that default to the new effect-httpapi server backend. The legacy
// hono backend remains the default for stable (`prod`/`latest`) installs.
const HTTPAPI_DEFAULT_ON_CHANNELS = new Set(["dev", "beta", "local"])

function number(key: string) {
  const value = process.env[key]
  if (!value) return undefined
  const parsed = Number(value)
  return Number.isInteger(parsed) && parsed > 0 ? parsed : undefined
}

const RENX_EXPERIMENTAL = truthy("RENX_EXPERIMENTAL")
const RENX_DISABLE_CLAUDE_CODE = truthy("RENX_DISABLE_CLAUDE_CODE")
const RENX_DISABLE_CLAUDE_CODE_SKILLS =
  RENX_DISABLE_CLAUDE_CODE || truthy("RENX_DISABLE_CLAUDE_CODE_SKILLS")
const copy = process.env["RENX_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"]

export const Flag = {
  OTEL_EXPORTER_OTLP_ENDPOINT: process.env["OTEL_EXPORTER_OTLP_ENDPOINT"],
  OTEL_EXPORTER_OTLP_HEADERS: process.env["OTEL_EXPORTER_OTLP_HEADERS"],

  RENX_AUTO_SHARE: truthy("RENX_AUTO_SHARE"),
  RENX_AUTO_HEAP_SNAPSHOT: truthy("RENX_AUTO_HEAP_SNAPSHOT"),
  RENX_GIT_BASH_PATH: process.env["RENX_GIT_BASH_PATH"],
  RENX_CONFIG: process.env["RENX_CONFIG"],
  RENX_CONFIG_CONTENT: process.env["RENX_CONFIG_CONTENT"],
  RENX_DISABLE_AUTOUPDATE: truthy("RENX_DISABLE_AUTOUPDATE"),
  RENX_ALWAYS_NOTIFY_UPDATE: truthy("RENX_ALWAYS_NOTIFY_UPDATE"),
  RENX_DISABLE_PRUNE: truthy("RENX_DISABLE_PRUNE"),
  RENX_DISABLE_TERMINAL_TITLE: truthy("RENX_DISABLE_TERMINAL_TITLE"),
  RENX_SHOW_TTFD: truthy("RENX_SHOW_TTFD"),
  RENX_PERMISSION: process.env["RENX_PERMISSION"],
  RENX_DISABLE_DEFAULT_PLUGINS: truthy("RENX_DISABLE_DEFAULT_PLUGINS"),
  RENX_DISABLE_LSP_DOWNLOAD: truthy("RENX_DISABLE_LSP_DOWNLOAD"),
  RENX_ENABLE_EXPERIMENTAL_MODELS: truthy("RENX_ENABLE_EXPERIMENTAL_MODELS"),
  RENX_DISABLE_AUTOCOMPACT: truthy("RENX_DISABLE_AUTOCOMPACT"),
  RENX_DISABLE_MODELS_FETCH: truthy("RENX_DISABLE_MODELS_FETCH"),
  RENX_DISABLE_MOUSE: truthy("RENX_DISABLE_MOUSE"),
  RENX_DISABLE_CLAUDE_CODE,
  RENX_DISABLE_CLAUDE_CODE_PROMPT: RENX_DISABLE_CLAUDE_CODE || truthy("RENX_DISABLE_CLAUDE_CODE_PROMPT"),
  RENX_DISABLE_CLAUDE_CODE_SKILLS,
  RENX_DISABLE_EXTERNAL_SKILLS: truthy("RENX_DISABLE_EXTERNAL_SKILLS"),
  RENX_FAKE_VCS: process.env["RENX_FAKE_VCS"],
  RENX_SERVER_PASSWORD: process.env["RENX_SERVER_PASSWORD"],
  RENX_SERVER_USERNAME: process.env["RENX_SERVER_USERNAME"],
  RENX_ENABLE_QUESTION_TOOL: truthy("RENX_ENABLE_QUESTION_TOOL"),

  // Experimental
  RENX_EXPERIMENTAL,
  RENX_EXPERIMENTAL_FILEWATCHER: Config.boolean("RENX_EXPERIMENTAL_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  RENX_EXPERIMENTAL_DISABLE_FILEWATCHER: Config.boolean("RENX_EXPERIMENTAL_DISABLE_FILEWATCHER").pipe(
    Config.withDefault(false),
  ),
  RENX_EXPERIMENTAL_ICON_DISCOVERY: RENX_EXPERIMENTAL || truthy("RENX_EXPERIMENTAL_ICON_DISCOVERY"),
  RENX_EXPERIMENTAL_DISABLE_COPY_ON_SELECT:
    copy === undefined ? process.platform === "win32" : truthy("RENX_EXPERIMENTAL_DISABLE_COPY_ON_SELECT"),
  RENX_ENABLE_EXA: truthy("RENX_ENABLE_EXA") || RENX_EXPERIMENTAL || truthy("RENX_EXPERIMENTAL_EXA"),
  RENX_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS: number("RENX_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS"),
  RENX_EXPERIMENTAL_OUTPUT_TOKEN_MAX: number("RENX_EXPERIMENTAL_OUTPUT_TOKEN_MAX"),
  RENX_EXPERIMENTAL_OXFMT: RENX_EXPERIMENTAL || truthy("RENX_EXPERIMENTAL_OXFMT"),
  RENX_EXPERIMENTAL_LSP_TY: truthy("RENX_EXPERIMENTAL_LSP_TY"),
  RENX_EXPERIMENTAL_LSP_TOOL: RENX_EXPERIMENTAL || truthy("RENX_EXPERIMENTAL_LSP_TOOL"),
  RENX_EXPERIMENTAL_PLAN_MODE: RENX_EXPERIMENTAL || truthy("RENX_EXPERIMENTAL_PLAN_MODE"),
  RENX_EXPERIMENTAL_MARKDOWN: !falsy("RENX_EXPERIMENTAL_MARKDOWN"),
  RENX_ENABLE_PARALLEL: truthy("RENX_ENABLE_PARALLEL") || truthy("RENX_EXPERIMENTAL_PARALLEL"),
  RENX_MODELS_URL: process.env["RENX_MODELS_URL"],
  RENX_MODELS_PATH: process.env["RENX_MODELS_PATH"],
  RENX_DISABLE_EMBEDDED_WEB_UI: truthy("RENX_DISABLE_EMBEDDED_WEB_UI"),
  RENX_DB: process.env["RENX_DB"],
  RENX_DISABLE_CHANNEL_DB: truthy("RENX_DISABLE_CHANNEL_DB"),
  RENX_SKIP_MIGRATIONS: truthy("RENX_SKIP_MIGRATIONS"),
  RENX_STRICT_CONFIG_DEPS: truthy("RENX_STRICT_CONFIG_DEPS"),

  RENX_WORKSPACE_ID: process.env["RENX_WORKSPACE_ID"],
  // Defaults to true on dev/beta/local channels so internal users exercise the
  // new effect-httpapi server backend. Stable (`prod`/`latest`) installs stay
  // on the legacy hono backend until the rollout is complete. An explicit env
  // var ("true"/"1" or "false"/"0") always wins, providing an opt-in for
  // stable users and an escape hatch for dev/beta users.
  RENX_EXPERIMENTAL_HTTPAPI:
    truthy("RENX_EXPERIMENTAL_HTTPAPI") ||
    (!falsy("RENX_EXPERIMENTAL_HTTPAPI") && HTTPAPI_DEFAULT_ON_CHANNELS.has(InstallationChannel)),
  RENX_EXPERIMENTAL_WORKSPACES: RENX_EXPERIMENTAL || truthy("RENX_EXPERIMENTAL_WORKSPACES"),
  RENX_EXPERIMENTAL_EVENT_SYSTEM: RENX_EXPERIMENTAL || truthy("RENX_EXPERIMENTAL_EVENT_SYSTEM"),

  // Evaluated at access time (not module load) because tests, the CLI, and
  // external tooling set these env vars at runtime.
  get RENX_DISABLE_PROJECT_CONFIG() {
    return truthy("RENX_DISABLE_PROJECT_CONFIG")
  },
  get RENX_TUI_CONFIG() {
    return process.env["RENX_TUI_CONFIG"]
  },
  get RENX_CONFIG_DIR() {
    return process.env["RENX_CONFIG_DIR"]
  },
  get RENX_PURE() {
    return truthy("RENX_PURE")
  },
  get RENX_PLUGIN_META_FILE() {
    return process.env["RENX_PLUGIN_META_FILE"]
  },
  get RENX_CLIENT() {
    return process.env["RENX_CLIENT"] ?? "cli"
  },
}
