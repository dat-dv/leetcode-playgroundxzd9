import fs from 'fs';
import path from 'path';
import { askQuestion, TARGET_DIR, TEMPLATE_DIR } from '../utils';

async function main() {
  const id =
    process.argv[2] ||
    (await askQuestion('❓ Nhập ID bài toán muốn tạo issue: '));
  const folderPath = path.join(TARGET_DIR, id);
  if (!fs.existsSync(folderPath)) {
    console.error(`❌ Thư mục leetcode/${id} không tồn tại!`);
    process.exit(1);
  }

  const metadataPath = path.join(folderPath, 'metadata.json');
  const templatePath = path.join(TEMPLATE_DIR, 'issue.md');

  let problemTitle = 'Unresolved Problem';
  if (fs.existsSync(metadataPath)) {
    const meta = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    problemTitle = meta.title;
  }

  if (!fs.existsSync(templatePath)) {
    console.error(`❌ Không tìm thấy file template tại: ${templatePath}`);
    process.exit(1);
  }

  let template = fs.readFileSync(templatePath, 'utf8');
  // Thay thế ID và Title thực tế vào template
  template = template
    .replace(/{{id}}/g, id)
    .replace(/{{title}}/g, problemTitle);

  fs.writeFileSync(path.join(folderPath, 'issue.md'), template);
  console.log(`✅ Đã tạo issue cho bài: [${id}] ${problemTitle}`);
}

main().catch(console.error);
