import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line cat joke entry for make.fun.
// Writes a single joke about cats (one line, under 200 characters)
// to /output/entry.txt for the judge to read.
const JOKE =
  "At 2 a.m. my cat sat on my face, purred once, and left. The vet charges $80 for less.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
