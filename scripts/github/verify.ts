import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { VALID_LABELS, parseMarkdown, ISSUE_ROOTS } from '../utils';

async function verify() {
  const stagedFiles = execSync('git diff --cached --name-only')
    .toString()
    .split('\n');
  const dirtyIssues = stagedFiles.filter(
    (f) =>
      f.endsWith('issue.md') && ISSUE_ROOTS.some((root) => f.startsWith(root))
  );

  if (dirtyIssues.length === 0) return;

  console.log('🔍 Đang kiểm tra nhãn của các Issue chuẩn bị commit...');
  let hasError = false;

  for (const relativePath of dirtyIssues) {
    const issuePath = path.join(process.cwd(), relativePath);
    if (fs.existsSync(issuePath)) {
      const { metadata } = parseMarkdown(fs.readFileSync(issuePath, 'utf8'));
      const labels =
        metadata.labels?.split(',').map((l: any) => l.trim()) || [];

      labels.forEach((l: any) => {
        if (!VALID_LABELS.includes(l)) {
          console.error(`❌ Nhãn "${l}" tại ${relativePath} không hợp lệ!`);
          hasError = true;
        }
      });
    }
  }

  if (hasError) process.exit(1);
  console.log('✅ Các nhãn đều hợp lệ.');
}

verify();
