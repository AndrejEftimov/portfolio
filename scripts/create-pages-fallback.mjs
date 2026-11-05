import { copyFile, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('dist')
const indexFile = path.join(distDir, 'index.html')
const fallbackFile = path.join(distDir, '404.html')

await access(indexFile, constants.R_OK)
await copyFile(indexFile, fallbackFile)

console.log('Created dist/404.html for GitHub Pages client-side routing.')
