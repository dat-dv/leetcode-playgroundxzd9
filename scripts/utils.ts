import path from 'path';
import fs from 'fs';
import readline from 'readline';

// --- CONFIGURATION ---
export const TARGET_DIR = path.join(process.cwd(), 'leetcode');
export const DEFAULT_ENTRY_POINTS = ['index.ts', 'solution.ts', 'main.ts'];
export const TEMPLATE_DIR = path.join(process.cwd(), 'scripts', 'templates');
export const REPO = 'dat-dv/leetcode-playgroundxzd9';
export const README_PATH = path.join(process.cwd(), 'readme.md');
export const START_MARKER = '<!-- LEETCODE_START -->';
export const END_MARKER = '<!-- LEETCODE_END -->';

export const VALID_LABELS = [
  'enhancement',
  'documentation',
  'bug',
  'Refactor',
  'Arrays & Hashing',
  'Two Pointers',
  'Stack',
  'Binary Search',
  'Sliding Window',
  'Linked List',
  'Trees',
  'Tries',
  'Backtracking',
  'Heap / Priority Queue',
  'Graphs',
  '1-D DP',
  'Intervals',
  'Greedy',
  'Advanced Graphs',
  '2-D DP',
  'Bit Manipulation',
  'Math & Geometry',
];

// --- HELPER FUNCTIONS ---

export async function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.trim());
    })
  );
}

export function parseMarkdown(content: string) {
  const lines = content.split('\n');
  let metadata: any = {};
  let bodyLines: string[] = [];
  let inMetadata = false;

  for (const line of lines) {
    if (line.trim() === '---') {
      inMetadata = !inMetadata;
      continue;
    }
    if (inMetadata) {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        metadata[key.trim()] = valueParts
          .join(':')
          .replace(/"/g, '')
          .replace(/'/g, '')
          .trim();
      }
    } else {
      bodyLines.push(line);
    }
  }
  return { metadata, body: bodyLines.join('\n').trim() };
}

export function getAvailableExamples(): string[] {
  return fs
    .readdirSync(TARGET_DIR)
    .filter(
      (f) =>
        fs.lstatSync(path.join(TARGET_DIR, f)).isDirectory() && /^\d+$/.test(f)
    )
    .sort((a, b) => parseInt(a) - parseInt(b));
}
