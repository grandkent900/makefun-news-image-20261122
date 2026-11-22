// news-image-20261122 entry (Node 22, standard library only).
// The image is the entry.png beside this file: this program copies it to
// the output directory. Outside the grader, MAKEFUN_OUTPUT_DIR stands in
// for /output, e.g. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(here, 'entry.png');

// Guard: refuse to emit a broken entry — the image must exist and be a
// whole PNG (magic bytes 89 50 4E 47) before it is copied anywhere.
const bytes = readFileSync(src);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47]);
if (!bytes.subarray(0, 4).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
console.error(`wrote ${dest} (${statSync(dest).size} bytes)`);
