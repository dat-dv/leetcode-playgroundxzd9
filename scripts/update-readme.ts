import fs from 'fs';
import path from 'path';
import {
  TARGET_DIR,
  README_PATH,
  START_MARKER,
  END_MARKER,
  SAMPLE_PATH,
} from './core/constants';
import {
  getProblemTitle,
  getProblemMetadata,
  getAvailableExamples,
} from './core/utils';
import { execSync } from 'child_process';

function updateReadme(): void {
  const dirs = getAvailableExamples();
  if (dirs.length === 0) return;

  const fallbackTemplate = `# {FOLDER_NAME} - Tên bài toán

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

## 2. Thông tin bài toán

* **Mức độ:** N/A
* **Chủ đề:** N/A
* **Nguồn bài:** [LeetCode](https://leetcode.com/)

## 3. Mô tả đề bài

*(Lưu ý: File được tạo tự động bởi pre-commit hook. Khuyên dùng lệnh \`npm run leetcode {FOLDER_NAME}\` để tải được đề bài và ngôn ngữ thay vì file mẫu offline này)*
`;

  const sampleContent = fallbackTemplate;

  let stagedFiles: string[] = [];
  try {
    stagedFiles = execSync('git diff --cached --name-only', {
      encoding: 'utf8',
    }).split('\n');
  } catch (e) {
    // Ignore error if not in a git repo
  }

  // Provide scaffolding for undocumented folders dynamically, BUT ONLY if they are active in this commit!
  dirs.forEach((dir) => {
    const isStaged = stagedFiles.some((f) => f.startsWith(`leetcode/${dir}/`));
    const localReadmePath = path.join(TARGET_DIR, dir, 'readme.md');

    if (isStaged && !fs.existsSync(localReadmePath)) {
      try {
        console.log(
          `\n⏳ Phát hiện folder mới 'leetcode/${dir}' chưa có readme. Tự động fetch dữ liệu...`
        );
        // Gọi lệnh init từ package.json
        execSync(`npm run leetcode ${dir}`, { stdio: 'inherit' });
        // Sau khi tạo xong, phải add tất cả file (metadata, readme) vào stage
        execSync(`git add "leetcode/${dir}/*"`);
      } catch (e) {
        console.log(
          `⚠️ Không thể fetch tự động cho '${dir}' (có thể sai ID). Sinh file mẫu offline...`
        );
        const targetContent = sampleContent.replace(/\{FOLDER_NAME\}/g, dir);
        fs.writeFileSync(localReadmePath, targetContent);
        execSync(`git add "${localReadmePath}"`);
      }
    }
  });

  // Sort logically if there are numbers (e.g., "2" before "202")
  dirs.sort((a, b) => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
    return a.localeCompare(b);
  });

  const rows = dirs.map((dir, idx) => {
    const meta = getProblemMetadata(dir);
    const title = meta.title || meta.id || dir;
    const difficulty = meta.difficulty || 'N/A';
    const tags =
      Array.isArray(meta.tags) && meta.tags.length > 0
        ? meta.tags.join(', ')
        : 'N/A';
    const linkStr = meta.link ? `[LeetCode](${meta.link})` : 'N/A';

    return `| ${idx + 1} | [${title}](./leetcode/${dir}) | ${difficulty} | ${tags} | ${linkStr} |`;
  });

  const tableHeader = `| STT | Bài toán | Mức độ | Chủ đề | Link gốc |\n| --- | --- | --- | --- | --- |`;
  const injectionContent = `\n\n${tableHeader}\n${rows.join('\n')}\n`;

  let readmeContent = fs.readFileSync(README_PATH, 'utf8');

  const startIndex = readmeContent.indexOf(START_MARKER);
  const endIndex = readmeContent.indexOf(END_MARKER);

  if (startIndex === -1 || endIndex === -1) {
    console.error('❌ Could not find markers in readme.md');
    process.exit(1);
  }

  const before = readmeContent.substring(0, startIndex + START_MARKER.length);
  const after = readmeContent.substring(endIndex);

  const newContent = `${before}${injectionContent}${after}`;
  fs.writeFileSync(README_PATH, newContent);
  console.log('✅ Updated readme.md with the latest LeetCode problems!');
}

updateReadme();
