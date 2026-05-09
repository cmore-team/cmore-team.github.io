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
