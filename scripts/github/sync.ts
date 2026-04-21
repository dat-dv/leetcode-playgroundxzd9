import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { TARGET_DIR, REPO, parseMarkdown } from '../utils';

const GH_TOKEN = process.env.GH_TOKEN;

async function sync() {
  // Lấy danh sách các file đang được git add (Staged files)
  const stagedFiles = execSync('git diff --cached --name-only')
    .toString()
    .split('\n');
  const dirtyIssues = stagedFiles.filter(
    (f) => f.endsWith('issue.md') && f.startsWith('leetcode/')
  );

  if (dirtyIssues.length === 0) {
    console.log(
      '⏭️ Không có thay đổi nào ở các file issue.md. Bỏ qua đồng bộ.'
    );
    return;
  }

  for (const relativePath of dirtyIssues) {
    const issuePath = path.join(process.cwd(), relativePath);
    const folderPath = path.dirname(issuePath);
    const metadataPath = path.join(folderPath, 'metadata.json');

    if (fs.existsSync(issuePath) && fs.existsSync(metadataPath)) {
      const { metadata, body } = parseMarkdown(
        fs.readFileSync(issuePath, 'utf8')
      );
      const problemMeta = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

      if (!GH_TOKEN) {
        console.log(
          `🔍 [DRY RUN] Phát hiện thay đổi tại ${relativePath}: ${metadata.title}`
        );
        continue;
      }

      const labels =
        metadata.labels?.split(',').map((l: any) => l.trim()) || [];
      const payload = { title: metadata.title, body, labels };

      if (problemMeta.githubIssueNumber) {
        console.log(
          `🔄 Đang cập nhật Issue #${problemMeta.githubIssueNumber} cho ${relativePath}...`
        );
        await fetch(
          `https://api.github.com/repos/${REPO}/issues/${problemMeta.githubIssueNumber}`,
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
          problemMeta.githubIssueNumber = data.number;
          fs.writeFileSync(metadataPath, JSON.stringify(problemMeta, null, 2));
          console.log(`📦 Đã lưu Issue #${data.number} và metadata.`);
        }
      }
    }
  }
}

sync().catch(console.error);
