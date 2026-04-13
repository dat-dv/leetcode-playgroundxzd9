import path from 'path';

export const TARGET_DIR = path.join(__dirname, '../../leetcode');
export const DEFAULT_ENTRY_POINTS = ['index.js', 'index.ts'];

// Readme markers
export const START_MARKER = '<!-- LEETCODE_START -->';
export const END_MARKER = '<!-- LEETCODE_END -->';

export const README_PATH = path.join(__dirname, '../../readme.md');
export const SAMPLE_PATH = path.join(__dirname, '../sample.md');
