import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();
import path from 'path';
import { execSync } from 'child_process';
import {
  TARGET_DIR,
  REPO,
  parseMarkdown,
  ISSUE_ROOTS,
  updateMarkdown,
} from '../utils';

const GH_TOKEN = process.env.GH_TOKEN;

async function sync() {
  // Lấy tất cả các file có thay đổi (staged, unstaged, untracked)
  const staged = execSync('git diff --cached --name-only')
    .toString()
    .split('\n')
    .filter(Boolean);
  const modified = execSync('git diff --name-only')
    .toString()
    .split('\n')
    .filter(Boolean);
  const untracked = execSync('git ls-files --others --exclude-standard')
    .toString()
    .split('\n')
    .filter(Boolean);

  const allDirtyFiles = Array.from(
    new Set([...staged, ...modified, ...untracked])
  );

  let dirtyIssues = allDirtyFiles.filter(
    (f) =>
      f.endsWith('issue.md') && ISSUE_ROOTS.some((root) => f.startsWith(root))
  );

  if (dirtyIssues.length === 0) {
    console.log('⏭️ Không tìm thấy Issue nào có thay đổi. Nghỉ ngơi thôi!');
    return;
  }

  for (const relativePath of dirtyIssues) {
    const issuePath = path.join(process.cwd(), relativePath);
    const folderPath = path.dirname(issuePath);
    const metadataPath = path.join(folderPath, 'metadata.json');
    const fileContent = fs.readFileSync(issuePath, 'utf8');
    const { metadata, body } = parseMarkdown(fileContent);

    let problemMeta: any = {};
    if (fs.existsSync(metadataPath)) {
      problemMeta = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    }

    // Lấy issue number từ metadata hoặc frontmatter
    const issueNumber = problemMeta.githubIssueNumber || metadata.issueId;

    if (!GH_TOKEN) {
      console.log(
        `🔍 [DRY RUN] Phát hiện thay đổi tại ${relativePath}: ${metadata.title}`
      );
      continue;
    }

    const labels = metadata.labels?.split(',').map((l: any) => l.trim()) || [];
    const [owner] = REPO.split('/');
    const payload = { title: metadata.title, body, labels, assignees: [owner] };

    if (issueNumber) {
      console.log(
        `🔄 Đang cập nhật Issue #${issueNumber} cho ${relativePath}...`
      );
      await fetch(
        `https://api.github.com/repos/${REPO}/issues/${issueNumber}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${GH_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      console.log(`✅ Đã đồng bộ thay đổi thành công.`);
    } else {
      console.log(`🆕 Đang tạo Issue mới cho ${relativePath}...`);
      const res = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GH_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data: any = await res.json();
        if (fs.existsSync(metadataPath)) {
          problemMeta.githubIssueNumber = data.number;
          fs.writeFileSync(metadataPath, JSON.stringify(problemMeta, null, 2));
        } else {
          // Nếu không có metadata.json, lưu vào frontmatter của issue.md
          const updatedContent = updateMarkdown(fileContent, {
            issueId: data.number,
          });
          fs.writeFileSync(issuePath, updatedContent);
        }
        console.log(`📦 Đã lưu Issue #${data.number}.`);
      }
    }
  }
}

sync().catch(console.error);
