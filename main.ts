import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Funniest Time Machine Warning Label — the butterfly rule, one line.
const ENTRY =
  "WARNING: Do not step on any butterflies. Especially the one that looks like your grandfather.";

// The warning label is written to entry.txt word for word, so the
// grader judges the submitted line and nothing else.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
