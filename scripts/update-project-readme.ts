import fs from 'fs';
import path from 'path';
import { TARGET_DIR, README_PATH, START_MARKER, END_MARKER } from './utils';

function update() {
  const folders = fs.readdirSync(TARGET_DIR).filter((f) => /^\d+$/.test(f));
  let rows = '';

  folders
    .sort((a, b) => parseInt(a) - parseInt(b))
    .forEach((f, i) => {
      const metaPath = path.join(TARGET_DIR, f, 'metadata.json');
      if (fs.existsSync(metaPath)) {
        const m = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
        // Build table row
        rows += `| ${i + 1} | [${m.title}](./leetcode/${f}) | ${m.difficulty} | ${m.tags.join(', ')} | [LeetCode](${m.link}) |\n`;
      }
    });

  const content = fs.readFileSync(README_PATH, 'utf8');
  // Thay thế dựa trên START và END Marker chuẩn
  const fresh = content.replace(
    new RegExp(`${START_MARKER}[\\s\\S]*${END_MARKER}`),
    `${START_MARKER}\n\n| STT | Bài toán | Mức độ | Chủ đề | Link gốc |\n| --- | --- | --- | --- | --- |\n${rows}\n${END_MARKER}`
  );

  fs.writeFileSync(README_PATH, fresh);
  console.log('✅ Readme Workflow: Updated successfully.');
}

update();
