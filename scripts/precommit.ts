import { execSync } from 'child_process';

/**
 * Chạy một câu lệnh terminal và hiển thị output trực tiếp
 */
function run(command: string) {
  console.log(`\n🚀 [Pre-commit] Đang thực hiện: ${command}...`);
  execSync(command, { stdio: 'inherit' });
}

async function main() {
  try {
    // 1. Chạy unit tests (nếu có)
    run('npm run test');

    // 2. Kiểm tra tính hợp lệ của Label trong các Issue mới
    run('tsx scripts/github/verify.ts');

    // 3. Đồng bộ Issue lên GitHub (Dry-run nếu thiếu Token)
    run('tsx scripts/github/sync.ts');

    // 4. Tự động cập nhật bảng thống kê bài tập trong Readme
    run('tsx scripts/update-project-readme.ts');

    // 5. Format lại file cho đẹp
    run('npx prettier . --write');

    // 6. Stages lại các file vừa bị update/format
    run('git add .');

    console.log('\n✨ [Pre-commit] Mọi thứ đã sẵn sàng! Commit thành công.\n');
  } catch (error) {
    console.error(
      '\n❌ [Pre-commit] Có lỗi xảy ra trong quá trình kiểm tra. Commit đã bị chặn!'
    );
    process.exit(1);
  }
}

main().catch(() => process.exit(1));
