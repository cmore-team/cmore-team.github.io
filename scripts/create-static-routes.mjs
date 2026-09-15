import { copyFileSync, mkdirSync } from 'node:fs'
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
  'tools/app-icon-generator',
  'tools/qr-code-generator',
  'tools/icon-resizer',
  'tools/feature-graphic-resizer',
]

for (const route of routes) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, { recursive: true })
  copyFileSync(indexPath, join(routeDir, 'index.html'))
}
