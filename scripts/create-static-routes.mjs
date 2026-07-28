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
