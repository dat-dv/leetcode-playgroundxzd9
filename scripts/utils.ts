import path from 'path';
import fs from 'fs';
import readline from 'readline';
import matter from 'gray-matter';

// --- CONFIGURATION ---
export const TARGET_DIR = path.join(process.cwd(), 'leetcode');
export const DEFAULT_ENTRY_POINTS = ['index.ts', 'solution.ts', 'main.ts'];
export const TEMPLATE_DIR = path.join(process.cwd(), 'scripts', 'templates');
export const REPO = 'dat-dv/leetcode-playgroundxzd9';
export const README_PATH = path.join(process.cwd(), 'readme.md');
export const START_MARKER = '<!-- LEETCODE_START -->';
export const END_MARKER = '<!-- LEETCODE_END -->';
export const TECH_DIR = path.join(process.cwd(), 'problem-solving-tech');
export const ISSUE_ROOTS = ['leetcode/', 'problem-solving-tech/'];

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
  'DSA',
  'Brute Force',
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
  const { data, content: body } = matter(content);
  return { metadata: data, body: body.trim() };
}

export function updateMarkdown(
  content: string,
  newMetadata: Record<string, any>
) {
  const { data, content: body } = matter(content);
  return matter.stringify(body, { ...data, ...newMetadata });
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
