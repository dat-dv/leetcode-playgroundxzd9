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
  // Lấy danh sách các file đang được git add (Staged files)
  const stagedFiles = execSync('git diff --cached --name-only')
    .toString()
    .split('\n');
  let dirtyIssues = stagedFiles.filter(
    (f) =>
      f.endsWith('issue.md') && ISSUE_ROOTS.some((root) => f.startsWith(root))
  );

  // Nếu không có file nào đang staged, quét toàn bộ thư mục để tìm issue chưa sync
  if (dirtyIssues.length === 0) {
    console.log('🔍 Không tìm thấy file staged. Đang quét toàn bộ thư mục...');
    for (const root of ISSUE_ROOTS) {
      const rootPath = path.join(process.cwd(), root);
      if (!fs.existsSync(rootPath)) continue;

      const items = fs.readdirSync(rootPath);
      for (const item of items) {
        const folderPath = path.join(rootPath, item);
        if (fs.lstatSync(folderPath).isDirectory()) {
          const issuePath = path.join(folderPath, 'issue.md');
          if (fs.existsSync(issuePath)) {
            // Check nếu chưa có ID thì mới coi là dirty
            const fileContent = fs.readFileSync(issuePath, 'utf8');
            const { metadata } = parseMarkdown(fileContent);
            const metadataPath = path.join(folderPath, 'metadata.json');
            let hasId = !!metadata.issueId;

            if (!hasId && fs.existsSync(metadataPath)) {
              const meta = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
              hasId = !!meta.githubIssueNumber;
            }

            if (!hasId) {
              dirtyIssues.push(path.relative(process.cwd(), issuePath));
            }
          }
        }
      }
    }
  }

  if (dirtyIssues.length === 0) {
    console.log('⏭️ Không tìm thấy Issue nào cần đồng bộ. Nghỉ ngơi thôi!');
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
    const payload = { title: metadata.title, body, labels };

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
