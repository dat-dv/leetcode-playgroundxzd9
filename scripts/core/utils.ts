import fs from 'fs';
import path from 'path';
import { TARGET_DIR } from './constants';

export function getProblemTitle(dirName: string): string {
  const readmePath = path.join(TARGET_DIR, dirName, 'readme.md');
  if (fs.existsSync(readmePath)) {
    const content = fs.readFileSync(readmePath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      if (line.startsWith('#')) {
        return line.replace(/^#+\s*/, '').trim();
      }
    }
  }
  return dirName;
}

export function getProblemMetadata(dirName: string): any {
  const metaPath = path.join(TARGET_DIR, dirName, 'metadata.json');
  if (fs.existsSync(metaPath)) {
    try {
      const content = fs.readFileSync(metaPath, 'utf8');
      return JSON.parse(content);
    } catch (e) {
      // JSON parse error
    }
  }
  return {
    title: getProblemTitle(dirName),
    difficulty: 'N/A',
    tags: [],
    link: '',
  };
}

export function getAvailableExamples(): string[] {
  if (!fs.existsSync(TARGET_DIR)) return [];
  return fs.readdirSync(TARGET_DIR).filter((file) => {
    return fs.statSync(path.join(TARGET_DIR, file)).isDirectory();
  });
}
