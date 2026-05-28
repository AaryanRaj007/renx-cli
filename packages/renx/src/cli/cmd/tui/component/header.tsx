import { useTheme } from "@tui/context/theme"
import { useLocal } from "../context/local"
import { Logo } from "./logo"

export function Header() {
  const local = useLocal()
  const { theme } = useTheme()
  const info = local.model.parsed()

  return (
    <box flexDirection="row" paddingTop={1} paddingLeft={2} paddingBottom={0} paddingRight={2}>
      <box flexShrink={0}>
        <Logo ink={theme.textMuted} />
      </box>
      <box flexDirection="column" justifyContent="flex-end" paddingLeft={3} paddingBottom={1}>
        <text fg="#444444">
          <span style={{ fg: "#c8c8c8" }}>{info.provider}</span>
          <span style={{ fg: "#333333" }}> / </span>
          <span style={{ fg: "#c8c8c8" }}>{info.model}</span>
        </text>
      </box>
    </box>
  )
}
