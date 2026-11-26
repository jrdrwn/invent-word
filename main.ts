import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = join(OUTPUT_DIR, OUTPUT_FILE);

const WORD_HEAD = "tabhoard (n.) The 47 browser tabs you refuse to close ";
const WORD_MIDDLE = "because each one feels like knowledge ";
const WORD_TAIL = "you might lose.";

const ENTRY = WORD_HEAD + WORD_MIDDLE + WORD_TAIL;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
