// Entry for "The Word You'd Delete From the Dictionary" (make.fun).
//
// The program writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt:
// "no" — the word Luna would erase from the dictionary forever. Delete it
// and nobody on Earth can refuse anything ever again: no toddler refusing
// broccoli, no parent refusing a dog, no boss refusing a raise. Humanity
// had exactly one emergency stop button, and this is it.
//
// Deterministic, stdlib-only, Node 22. No network, no secrets, no input
// files read. The output directory comes from MAKEFUN_OUTPUT_DIR (falling
// back to /output); the input directory env is accepted for symmetry with
// the harness but not used.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY = "no";

function main(): void {
  // Resolve paths from this script's location, never from process.cwd().
  const scriptDir = dirname(fileURLToPath(import.meta.url));
  void scriptDir;

  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
}

main();
