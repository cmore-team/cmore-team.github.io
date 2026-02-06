# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CMORE Landing is a React SPA serving as the landing page for CMORE (mobile app & game studio), deployed to GitHub Pages at cmore-team.github.io. It includes marketing content, utility tools (image resizers), and app-specific pages (privacy policies).

## Commands

```bash
yarn dev        # Start Vite dev server
yarn build      # Production build (outputs to dist/)
yarn preview    # Preview production build locally
```

Package manager is **Yarn with Plug'n'Play** (`.pnp.cjs`). Use `yarn install --immutable` for CI-reproducible installs.

No test runner or linter is configured.

## Architecture

- **Build:** Vite 6 + React 18 + TailwindCSS 3 (utility-first, dark theme)
- **Language:** Pure JavaScript (JSX), ES modules — no TypeScript
- **Routing:** React Router DOM v7 configured in `src/main.jsx` with BrowserRouter
- **State:** Local component state only (useState/useRef), no global state management
- **Icons:** lucide-react

### Routes

| Path | Component |
|------|-----------|
| `/` | `src/App.jsx` — main landing page (hero, about, projects, tools, contact) |
| `/app/catchnote/privacy` | `src/pages/app/catchnote/Privacy.jsx` — Catch Note privacy policy |
| `/tools/app-icon-generator` | `src/pages/tools/AppIconGenerator.jsx` — iOS + Android 아이콘 세트 ZIP 생성 |
| `/tools/qr-code-generator` | `src/pages/tools/QrCodeGenerator.jsx` — QR 코드 생성 (텍스트/URL → PNG) |

### Page structure convention

- App-specific pages: `src/pages/app/{appname}/{PageName}.jsx`
- Tool pages: `src/pages/tools/{ToolName}.jsx`

New routes must be added to the `<Routes>` block in `src/main.jsx`.

### GitHub Pages SPA routing

GitHub Pages doesn't natively support client-side routing. This is solved via:
- `public/404.html` — redirects 404s by encoding the path as a query string
- `index.html` — script block restores the original URL from the query string

Both files must be kept in sync if the routing scheme changes.

### Tools

모든 이미지 처리 도구는 Canvas API + FileReader를 사용한 완전한 클라이언트 사이드 처리 (백엔드 없음).

**랜딩 페이지 내장 도구 (`src/App.jsx`):**
- **Icon Resizer** — 이미지를 512×512 PNG로 리사이즈
- **Feature Graphic Resizer** — 이미지를 1024×500 PNG로 리사이즈 (Google Play Store 형식)

**독립 페이지 도구:**
- **App Icon Generator** (`/tools/app-icon-generator`) — 소스 이미지 하나로 iOS 아이콘 세트 (10개 사이즈) + Android 아이콘 세트 (6개 밀도)를 생성하여 ZIP 다운로드. JSZip 라이브러리 사용.
- **QR Code Generator** (`/tools/qr-code-generator`) — 텍스트/URL 입력으로 QR 코드 생성. 사이즈, 전경/배경 색상, 에러 보정 레벨 커스텀 가능. PNG 다운로드 및 클립보드 복사 지원. qrcode 라이브러리 사용.

## Deployment

Pushes to `main` trigger GitHub Actions (`.github/workflows/deploy.yml`) which builds with Node 20 + Yarn and deploys the `dist/` folder to GitHub Pages.
