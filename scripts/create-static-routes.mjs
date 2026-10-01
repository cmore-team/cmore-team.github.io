import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const distDir = fileURLToPath(new URL('../dist', import.meta.url))
const indexPath = join(distDir, 'index.html')

const routes = [
  'app/anzan',
  'app/anzan/privacy',
  'app/anzan/support',
  'app/catchnote/privacy',
  'app/crossline/privacy',
  'app/laborform/privacy',
  'app/laborform/support',
  'app/idphoto/privacy',
  'app/idphoto/support',
  'app/receiptcsv/privacy',
  'app/receiptcsv/support',
  'app/billform/privacy',
  'app/billform/support',
  'app/inkframe/privacy',
  'app/inkframe/support',
  'app/qrbrand/privacy',
  'app/qrbrand/support',
  'app/subsledger/privacy',
  'app/subsledger/support',
  'app/pressuretrack/privacy',
  'app/pressuretrack/support',
  'app/wattcalc/privacy',
  'app/wattcalc/support',
  'app/loanplan/privacy',
  'app/loanplan/support',
  'app/lanbeam',
  'app/lanbeam/privacy',
  'app/lanbeam/support',
  'app/pantrypaw/privacy',
  'app/pantrypaw/support',
  'app/plantpaw/privacy',
  'app/plantpaw/support',
  'app/waterpaw/privacy',
  'app/waterpaw/support',
  'app/splitpaw/privacy',
  'app/splitpaw/support',
  'app/packpaw/privacy',
  'app/packpaw/support',
  'app/yarnpaw/privacy',
  'app/yarnpaw/support',
  'app/bookpaw/privacy',
  'app/bookpaw/support',
  'app/cardpaw/privacy',
  'app/cardpaw/support',
  'app/focuspaw/privacy',
  'app/focuspaw/support',
  'app/giftpaw/privacy',
  'app/giftpaw/support',
  'app/minesweeper/privacy',
  'app/minesweeper/support',
  'app/minesweeper/share',
  'app/light-window/privacy',
  'app/light-window/support',
  'app/roomfit/privacy',
  'app/roomfit/support',
  'tools/app-icon-generator',
  'tools/qr-code-generator',
  'tools/icon-resizer',
  'tools/feature-graphic-resizer',
]

// Link previews (KakaoTalk, iMessage) read static HTML only, so shared routes
// get their own Open Graph tags instead of the generic CMORE ones.
const siteUrl = 'https://cmore-team.github.io'
const meta = {
  'app/minesweeper/share': {
    title: '지뢰찾기 클래식 | 내 기록에 도전해 보세요',
    description: '친구가 지뢰찾기 클래식을 클리어했어요. 너도 해볼래?',
    image: `${siteUrl}/app/minesweeper/share/og.png`,
  },
}

function withMeta(html, route, { title, description, image }) {
  const url = `${siteUrl}/${route}/`
  const replaced = html
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
    .replace(/(<meta name="twitter:card" content=")[^"]*/, '$1summary_large_image')
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${description}`)
    .replace('<meta property="og:site_name"', `<meta property="og:image" content="${image}" />\n    <meta name="twitter:image" content="${image}" />\n    <meta property="og:site_name"`)
  if (!replaced.includes(image) || !replaced.includes(url)) {
    throw new Error(`Open Graph injection failed for ${route}`)
  }
  return replaced
}

const indexHtml = readFileSync(indexPath, 'utf8')
for (const route of routes) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  if (meta[route]) {
    writeFileSync(join(routeDir, 'index.html'), withMeta(indexHtml, route, meta[route]))
  } else {
    copyFileSync(indexPath, join(routeDir, 'index.html'))
  }
}
