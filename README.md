<p align="center">
  <a href="https://renx.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Renx logo">
    </picture>
  </a>
</p>

<h3 align="center">Renx</h3>
<p align="center">Any AI model. One terminal. Zero lock-in.</p>

<p align="center">
  <a href="https://renx.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/renx-ai"><img alt="npm" src="https://img.shields.io/npm/v/renx-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/renx/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/renx/publish.yml?style=flat-square&branch=dev" /></a>
</p>

[![Renx Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://renx.ai)

---

## Get started

```bash
# quick install
curl -fsSL https://renx.ai/install | bash

# or pick your package manager
npm i -g renx@latest              # also works with bun/pnpm/yarn
brew install anomalyco/tap/renx   # macOS / Linux — kept current
brew install renx                 # macOS / Linux — official formula, slower to update
scoop install renx                # Windows
choco install renx                # Windows
sudo pacman -S renx                # Arch (stable)
paru -S renx-bin                   # Arch (AUR, latest)
mise use -g renx                   # any OS, via mise
nix run nixpkgs#renx              # Nix, or github:anomalyco/renx for the dev branch
```

> [!TIP]
> Uninstall anything older than `0.1.x` before installing fresh.

**Where it installs:** the script checks, in order, `$RENX_INSTALL_DIR` → `$XDG_BIN_DIR` → `$HOME/bin` (if usable) → `$HOME/.renx/bin`.

```bash
# override examples
RENX_INSTALL_DIR=/usr/local/bin curl -fsSL https://renx.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://renx.ai/install | bash
```

## Desktop app (beta)

Prefer a window over a terminal? Grab a build from the [releases page](https://github.com/anomalyco/renx/releases) or [renx.ai/download](https://renx.ai/download).

| Platform | File |
|---|---|
| macOS (Apple Silicon) | `renx-desktop-mac-arm64.dmg` |
| macOS (Intel) | `renx-desktop-mac-x64.dmg` |
| Windows | `renx-desktop-windows-x64.exe` |
| Linux | `.deb`, `.rpm`, or `.AppImage` |

```bash
brew install --cask renx-desktop         # macOS
scoop bucket add extras; scoop install extras/renx-desktop   # Windows
```

## How you work with it

Renx ships with two agents, swapped with `Tab`:

- **build** — full read/write access, for actually shipping changes
- **plan** — read-only; walks the codebase and proposes changes without touching files, and asks before running any shell command. Good for getting oriented in something unfamiliar before you let it edit anything.

There's also a **general** subagent for open-ended, multi-step searches — call it directly with `@general` in a message.

Full configuration reference: [renx.ai/docs](https://renx.ai/docs).

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

## Building something on top of Renx?

If your project uses "renx" in its name (e.g. `renx-dashboard`, `renx-mobile`), please note in your README that it isn't built or maintained by the Renx team.

## FAQ

**What makes Renx different?**

<!-- TODO: replace with your actual differentiators — this is where the previous
     draft carried over claims (team background, specific comparisons) that
     described someone else's project rather than yours. Worth answering
     honestly here: what does Renx do that the alternatives don't, or do
     differently? A few real angles to consider, if true for your project:
     - which providers/models it supports and how switching between them works
     - what the client/server split (if you have one) actually enables
     - anything genuinely distinct about the terminal UI itself -->

## Community

[Discord](https://discord.gg/renx) · [X.com](https://x.com/renx)
