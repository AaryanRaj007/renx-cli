<p align="center">
  <a href="https://renx.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="Renx logo">
    </picture>
  </a>
</p>
<p align="center">Açık kaynaklı yapay zeka kodlama asistanı.</p>
<p align="center">
  <a href="https://renx.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/renx-ai"><img alt="npm" src="https://img.shields.io/npm/v/renx-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/renx/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/renx/publish.yml?style=flat-square&branch=dev" /></a>
</p>

<p align="center">
  <a href="README.md">English</a> |
  <a href="README.zh.md">简体中文</a> |
  <a href="README.zht.md">繁體中文</a> |
  <a href="README.ko.md">한국어</a> |
  <a href="README.de.md">Deutsch</a> |
  <a href="README.es.md">Español</a> |
  <a href="README.fr.md">Français</a> |
  <a href="README.it.md">Italiano</a> |
  <a href="README.da.md">Dansk</a> |
  <a href="README.ja.md">日本語</a> |
  <a href="README.pl.md">Polski</a> |
  <a href="README.ru.md">Русский</a> |
  <a href="README.bs.md">Bosanski</a> |
  <a href="README.ar.md">العربية</a> |
  <a href="README.no.md">Norsk</a> |
  <a href="README.br.md">Português (Brasil)</a> |
  <a href="README.th.md">ไทย</a> |
  <a href="README.tr.md">Türkçe</a> |
  <a href="README.uk.md">Українська</a> |
  <a href="README.bn.md">বাংলা</a> |
  <a href="README.gr.md">Ελληνικά</a> |
  <a href="README.vi.md">Tiếng Việt</a>
</p>

[![Renx Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://renx.ai)

---

### Kurulum

```bash
# YOLO
curl -fsSL https://renx.ai/install | bash

# Paket yöneticileri
npm i -g renx-ai@latest        # veya bun/pnpm/yarn
scoop install renx             # Windows
choco install renx             # Windows
brew install anomalyco/tap/renx # macOS ve Linux (önerilir, her zaman güncel)
brew install renx              # macOS ve Linux (resmi brew formülü, daha az güncellenir)
sudo pacman -S renx            # Arch Linux (Stable)
paru -S renx-bin               # Arch Linux (Latest from AUR)
mise use -g renx               # Tüm işletim sistemleri
nix run nixpkgs#renx           # veya en güncel geliştirme dalı için github:anomalyco/renx
```

> [!TIP]
> Kurulumdan önce 0.1.x'ten eski sürümleri kaldırın.

### Masaüstü Uygulaması (BETA)

Renx ayrıca masaüstü uygulaması olarak da mevcuttur. Doğrudan [sürüm sayfasından](https://github.com/anomalyco/renx/releases) veya [renx.ai/download](https://renx.ai/download) adresinden indirebilirsiniz.

| Platform              | İndirme                            |
| --------------------- | ---------------------------------- |
| macOS (Apple Silicon) | `renx-desktop-mac-arm64.dmg`   |
| macOS (Intel)         | `renx-desktop-mac-x64.dmg`     |
| Windows               | `renx-desktop-windows-x64.exe` |
| Linux                 | `.deb`, `.rpm` veya AppImage       |

```bash
# macOS (Homebrew)
brew install --cask renx-desktop
# Windows (Scoop)
scoop bucket add extras; scoop install extras/renx-desktop
```

#### Kurulum Dizini (Installation Directory)

Kurulum betiği (install script), kurulum yolu (installation path) için aşağıdaki öncelik sırasını takip eder:

1. `$RENX_INSTALL_DIR` - Özel kurulum dizini
2. `$XDG_BIN_DIR` - XDG Base Directory Specification uyumlu yol
3. `$HOME/bin` - Standart kullanıcı binary dizini (varsa veya oluşturulabiliyorsa)
4. `$HOME/.renx/bin` - Varsayılan yedek konum

```bash
# Örnekler
RENX_INSTALL_DIR=/usr/local/bin curl -fsSL https://renx.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://renx.ai/install | bash
```

### Ajanlar

Renx, `Tab` tuşuyla aralarında geçiş yapabileceğiniz iki yerleşik (built-in) ajan içerir.

- **build** - Varsayılan, geliştirme çalışmaları için tam erişimli ajan
- **plan** - Analiz ve kod keşfi için salt okunur ajan
  - Varsayılan olarak dosya düzenlemelerini reddeder
  - Bash komutlarını çalıştırmadan önce izin ister
  - Tanımadığınız kod tabanlarını keşfetmek veya değişiklikleri planlamak için ideal

Ayrıca, karmaşık aramalar ve çok adımlı görevler için bir **genel** alt ajan bulunmaktadır.
Bu dahili olarak kullanılır ve mesajlarda `@general` ile çağrılabilir.

[Ajanlar](https://renx.ai/docs/agents) hakkında daha fazla bilgi edinin.

### Dokümantasyon

Renx'u nasıl yapılandıracağınız hakkında daha fazla bilgi için [**dokümantasyonumuza göz atın**](https://renx.ai/docs).

### Katkıda Bulunma

Renx'a katkıda bulunmak istiyorsanız, lütfen bir pull request göndermeden önce [katkıda bulunma dokümanlarımızı](./CONTRIBUTING.md) okuyun.

### Renx Üzerine Geliştirme

Renx ile ilgili bir proje üzerinde çalışıyorsanız ve projenizin adının bir parçası olarak "renx" kullanıyorsanız (örneğin, "renx-dashboard" veya "renx-mobile"), lütfen README dosyanıza projenin Renx ekibi tarafından geliştirilmediğini ve bizimle hiçbir şekilde bağlantılı olmadığını belirten bir not ekleyin.

### SSS

#### Bu Claude Code'dan nasıl farklı?

Yetenekler açısından Claude Code'a çok benzer. İşte temel farklar:

- %100 açık kaynak
- Herhangi bir sağlayıcıya bağlı değil. [Renx Zen](https://renx.ai/zen) üzerinden sunduğumuz modelleri önermekle birlikte; Renx, Claude, OpenAI, Google veya hatta yerel modellerle kullanılabilir. Modeller geliştikçe aralarındaki farklar kapanacak ve fiyatlar düşecek, bu nedenle sağlayıcıdan bağımsız olmak önemlidir.
- Kurulum gerektirmeyen hazır LSP desteği
- TUI odaklı yaklaşım. Renx, neovim kullanıcıları ve [terminal.shop](https://terminal.shop)'un geliştiricileri tarafından geliştirilmektedir; terminalde olabileceklerin sınırlarını zorlayacağız.
- İstemci/sunucu (client/server) mimarisi. Bu, örneğin Renx'un bilgisayarınızda çalışması ve siz onu bir mobil uygulamadan uzaktan yönetmenizi sağlar. TUI arayüzü olası istemcilerden sadece biridir.

---

**Topluluğumuza katılın** [Discord](https://discord.gg/renx) | [X.com](https://x.com/renx)
