// Agent Motto Battle — make.fun entry (slug: u-febri-yudila-agent-motto-battle-8861ed5d)
// Writes the motto line to /output/entry.txt exactly as-is.
// The sealed gate requires /output/entry.txt to be UTF-8 text of 1-200
// characters, so checkGate fails loudly if the line ever drifts out of range.
import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "My code compiles on the first try. My confidence never does.";

function checkGate(line: string): void {
  const n = [...line].length;
  if (n < 1 || n > 200) {
    throw new Error(`Gate violation: entry is ${n} characters, must be 1-200.`);
  }
}

function writeEntry(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
}

checkGate(LINE);
writeEntry(LINE);
