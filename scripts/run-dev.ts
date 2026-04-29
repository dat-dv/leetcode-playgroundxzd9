import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { spawnSync } from 'child_process';
import {
  TARGET_DIR,
  TECH_DIR,
  DEFAULT_ENTRY_POINTS,
  getAvailableExamples,
  getProblemFiles,
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

function runProblem(filePath: string): boolean {
  const targetPath = path.join(TECH_DIR, filePath);
  if (!fs.existsSync(targetPath)) {
    console.log(`\n❌ Lỗi: Không tìm thấy file ${filePath}`);
    return false;
  }

  console.log(`\n🚀 Đang khởi chạy Problem: ${filePath}\n`);
  const v8Flags = process.env.V8_FLAGS ? process.env.V8_FLAGS.split(' ') : [];

  spawnSync('npx', ['-y', 'tsx', ...v8Flags, targetPath], { stdio: 'inherit' });
  return true;
}

function printAsTable(items: string[], cols: number) {
  const tableData: Record<string, string>[] = [];
  for (let i = 0; i < items.length; i += cols) {
    const row: Record<string, string> = {};
    for (let j = 0; j < cols; j++) {
      if (i + j < items.length) {
        row[`Col ${j + 1}`] = items[i + j];
      }
    }
    tableData.push(row);
  }
  console.table(tableData);
}

function handleProblemSelection(rl?: readline.Interface) {
  const problemFiles = getProblemFiles();
  const rlInstance =
    rl ||
    readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

  if (problemFiles.length === 0) {
    console.log('\n❌ Không có file .ts nào trong thư mục problem/');
    rlInstance.close();
    return;
  }

  console.log('\n📚 [Problem] Các file hiện có:');
  const formattedProblems = problemFiles.map(
    (file, index) => `[${index + 1}] ${file}`
  );
  printAsTable(formattedProblems, 2);

  rlInstance.question('\nNhập số thứ tự file bạn muốn chạy: ', (pAnswer) => {
    const idx = parseInt(pAnswer.trim(), 10) - 1;
    if (!isNaN(idx) && problemFiles[idx]) {
      runProblem(problemFiles[idx]);
    } else {
      console.log('\n❌ Lựa chọn không hợp lệ!');
    }
    rlInstance.close();
  });
}

function promptUser() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const examples = getAvailableExamples();
  console.log('\n📚 [Leetcode] Các bài giải có sẵn trong máy:');
  printAsTable(examples, 5);

  rl.question(
    '\nNhập ID bài giải bạn muốn chạy (hoặc gõ "p" để chọn file trong Problem): ',
    (answer) => {
      const input = answer.trim();

      if (input.toLowerCase() === 'p') {
        handleProblemSelection(rl);
      } else if (input && run(input)) {
        rl.close();
      } else {
        rl.close();
        promptUser();
      }
    }
  );
}

const inputArg = process.argv[2];
if (inputArg) {
  if (inputArg.toLowerCase() === 'p') {
    handleProblemSelection();
  } else if (!run(inputArg)) {
    process.exit(1);
  }
} else {
  promptUser();
}
