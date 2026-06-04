/**
 * Komprimiert die 6 Service-Hero-PNGs in public/images/services/ zu JPGs (Q88).
 */
import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import path from 'node:path'

const dir = path.resolve('public/images/services')
const files = (await readdir(dir)).filter((f) => f.endsWith('.png'))

let totalBefore = 0
let totalAfter = 0
const results = []

for (const file of files) {
  const inPath = path.join(dir, file)
  const outPath = path.join(dir, file.replace(/\.png$/, '.jpg'))
  const beforeSize = (await stat(inPath)).size
  totalBefore += beforeSize

  await sharp(inPath)
    .resize({ width: 2400, withoutEnlargement: true })
    .jpeg({ quality: 88, mozjpeg: true, progressive: true })
    .toFile(outPath)

  const afterSize = (await stat(outPath)).size
  totalAfter += afterSize
  await unlink(inPath)
  results.push({ file, beforeMb: (beforeSize / 1e6).toFixed(1), afterMb: (afterSize / 1e6).toFixed(2) })
}

console.table(results)
console.log('Total: ' + (totalBefore / 1e6).toFixed(1) + ' MB → ' + (totalAfter / 1e6).toFixed(1) + ' MB')
