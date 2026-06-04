/**
 * Komprimiert alle PNG-Bilder in public/images/scenes/ zu hochwertigen JPGs (Q88).
 * Originale werden gelöscht. Pfade in den Daten-Files werden anschließend per Replace
 * von .png auf .jpg umgestellt (separater Node-Script-Schritt).
 */
import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import path from 'node:path'

const dir = path.resolve('public/images/scenes')
const files = (await readdir(dir)).filter((f) => f.endsWith('.png'))

let totalBefore = 0
let totalAfter = 0
const results = []

for (const file of files) {
  const inPath = path.join(dir, file)
  const outPath = path.join(dir, file.replace(/\.png$/, '.jpg'))
  const beforeSize = (await stat(inPath)).size
  totalBefore += beforeSize

  // Sharp: Resize auf max 2400px breit (4K ist Overkill für Web), JPG Q88
  // mozjpeg-encoder gibt deutlich kleinere Files als der Standard-encoder
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
console.log('---')
console.log('Total before: ' + (totalBefore / 1e6).toFixed(1) + ' MB')
console.log('Total after:  ' + (totalAfter / 1e6).toFixed(1) + ' MB')
console.log('Saved:        ' + ((totalBefore - totalAfter) / 1e6).toFixed(1) + ' MB (' + (100 - (totalAfter / totalBefore) * 100).toFixed(1) + '% reduction)')
console.log('Largest file: ' + (Math.max(...results.map((r) => +r.afterMb))).toFixed(2) + ' MB')
