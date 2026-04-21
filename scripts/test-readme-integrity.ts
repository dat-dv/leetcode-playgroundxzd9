import fs from 'fs';
import { README_PATH, START_MARKER, END_MARKER } from './utils';

function testReadmeIntegrity(): void {
  console.log('🧪 Chạy test: Kiểm tra tính hợp lệ của file readme.md...');

  if (!fs.existsSync(README_PATH)) {
    console.error('❌ ERROR: Không tìm thấy file readme.md!');
    process.exit(1);
  }

  const content = fs.readFileSync(README_PATH, 'utf8');

  const hasStart = content.includes(START_MARKER);
  const hasEnd = content.includes(END_MARKER);

  if (!hasStart || !hasEnd) {
    console.error('❌ ERROR: Cấu trúc readme.md không hợp lệ!');
    console.error(
      `Bắt buộc phải chứa đủ 2 dòng comment sau để pre-commit hook hoạt động:\n${START_MARKER}\n${END_MARKER}`
    );
    process.exit(1);
  }

  const startIndex = content.indexOf(START_MARKER);
  const endIndex = content.indexOf(END_MARKER);

  if (startIndex >= endIndex) {
    console.error(
      '❌ ERROR: Marker kết thúc (END) lại nằm trước Marker bắt đầu (START).'
    );
    process.exit(1);
  }

  console.log('✅ PASS: Cấu trúc file readme.md hoàn toàn hợp lệ.');
  process.exit(0);
}

testReadmeIntegrity();
