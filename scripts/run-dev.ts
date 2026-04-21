import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { spawnSync } from 'child_process';
import {
  TARGET_DIR,
  DEFAULT_ENTRY_POINTS,
  getAvailableExamples,
} from './utils';

dotenv.config();

function run(exampleName: string): boolean {
  let targetPath = '';

  for (const file of DEFAULT_ENTRY_POINTS) {
    const fullPath = path.join(TARGET_DIR, exampleName, file);
    if (fs.existsSync(fullPath)) {
      targetPath = fullPath;
      break;
    }
  }

  if (!targetPath) {
    console.log(`\n❌ Lỗi: Không tìm thấy bài giải mang ID ${exampleName}`);
    return false;
  }

  console.log(`\n🚀 Đang khởi chạy: ${exampleName}\n`);
  const v8Flags = process.env.V8_FLAGS ? process.env.V8_FLAGS.split(' ') : [];

  spawnSync('npx', ['-y', 'tsx', ...v8Flags, targetPath], { stdio: 'inherit' });
  return true;
}

function promptUser() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const examples = getAvailableExamples();
  console.log('\n📚 Các bài giải có sẵn trong máy:');
  examples.forEach((ex) => console.log(`- ${ex}`));

  rl.question('\nNhập ID bài giải bạn muốn chạy: ', (answer) => {
    const input = answer.trim();
    if (input && run(input)) {
      rl.close();
    } else {
      promptUser();
    }
  });
}

const inputArg = process.argv[2];
if (inputArg) {
  if (!run(inputArg)) process.exit(1);
} else {
  promptUser();
}
