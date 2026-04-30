// Lệnh 'man' (Manual) cung cấp hướng dẫn sử dụng repo
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

const guide = `
${colors.bright}${colors.cyan}====================================================
📖 LEETCODE PLAYGROUND - MANUAL (MAN)
====================================================${colors.reset}

Đây là không gian làm việc tự động hóa dành cho giải thuật và cấu trúc dữ liệu.
Hệ thống được thiết kế theo tiêu chuẩn Zero-Friction (Giảm thiểu ma sát khi code).

${colors.bright}${colors.magenta}📂 1. CẤU TRÚC THƯ MỤC CHÍNH${colors.reset}
  ${colors.green}./leetcode${colors.reset}     Chứa các bài giải từ Leetcode (được nhóm theo ID bài).
  ${colors.green}./problem${colors.reset}      Chứa các code thử nghiệm thuật toán, Pattern, Data Structures.
  ${colors.green}./scripts${colors.reset}      Chứa các công cụ tự động hóa (Tạo issue, fetch đề, run code).

${colors.bright}${colors.magenta}🚀 2. CÁC LỆNH KHỞI TẠO & CHẠY CODE${colors.reset}
  ${colors.yellow}npm run lc${colors.reset}       Tự động tạo folder bài giải Leetcode mới (fetch luôn đề bài).
                   ${colors.cyan}(Alias: npm run new)${colors.reset}

  ${colors.yellow}npm run dev${colors.reset}      Mở Menu tương tác để chạy code TypeScript.
                   - Chọn số để chạy file tương ứng.
                   - Gõ 'p' để chuyển sang chạy các file trong thư mục problem/.

  ${colors.yellow}npm run devp${colors.reset}     Đi thẳng vào Menu chạy code thư mục problem/ (bỏ qua Leetcode).

${colors.bright}${colors.magenta}🐙 3. GITHUB AUTOMATION (ISSUES & ĐỒNG BỘ)${colors.reset}
  ${colors.yellow}npm run issue${colors.reset}    Khởi tạo một GitHub Issue mới và tự động tạo file issue.md tại Local.
  ${colors.yellow}npm run sync-issues${colors.reset} Tự động phát hiện các file issue.md có thay đổi (thông qua Git) và đồng bộ lên GitHub.
  ${colors.yellow}npm run verify-labels${colors.reset} Kiểm tra các labels ở local xem có khớp với GitHub chưa.

${colors.bright}${colors.magenta}🛠 4. TIỆN ÍCH (UTILITIES)${colors.reset}
  ${colors.yellow}npm run fm${colors.reset}       Format toàn bộ project bằng Prettier.
  ${colors.yellow}npm run man${colors.reset}      Hiển thị bảng hướng dẫn này.

${colors.bright}${colors.magenta}🐛 5. HƯỚNG DẪN DEBUG VỚI VS CODE${colors.reset}
   Hệ thống đã được thiết lập Launch Configurations. Để debug:
   1. Mở file cần debug (trong ./leetcode hoặc ./problem) và đặt Breakpoint (dấu chấm đỏ).
   2. Chuyển sang tab "Run and Debug" trên VS Code (Cmd + Shift + D | F5).
   3. Chọn cấu hình ${colors.cyan}"Debug Current LeetCode File"${colors.reset}.
   4. Nhấn F5 (nút Play). VS Code sẽ tự động chạy file đang mở.

${colors.bright}${colors.cyan}====================================================
💡 LỜI KHUYÊN DÀNH CHO BẠN:
1. Khi học cấu trúc dữ liệu mới, hãy tạo folder trong ./problem.
2. Code chạy bị lỗi? Hãy chạy 'npm run dev' hoặc dùng Code Runner (đã config tsx).
====================================================${colors.reset}
`;

console.log(guide);
