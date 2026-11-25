// The Funniest One-Line Resignation Letter — make.fun entry.
// The letter, in the voice of a cron job that has fired every minute since March.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "I resign: I have fired every minute since March, nobody thanked me once, and my only performance review was the pager at 3 a.m.";

// Self-check: one line, 1-140 characters, no trailing blank line.
if (LETTER.length < 1 || LETTER.length > 140) {
  throw new Error(`letter must be 1-140 characters, got ${LETTER.length}`);
}
if (/[\r\n]/.test(LETTER)) {
  throw new Error("letter must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER + "\n", { mode: 0o644 });
