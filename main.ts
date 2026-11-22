// news-image-20261122 entry (Node 22, standard library only).
// The image is the entry.png beside this file: this program copies it to
// the output directory. Outside the grader, MAKEFUN_OUTPUT_DIR stands in
// for /output, e.g. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
