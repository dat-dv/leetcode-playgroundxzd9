# Quy trình làm việc

Sơ đồ quá trình tạo và commit một bài giải mới:

```mermaid
graph TD
    A[Bắt đầu bài toán mới] --> B(Tạo thư mục trong /leetcode)
    B --> C{Thêm readme.md?}
    C -->|Thêm `# Tên bài`| D[Tạo file index.js / index.ts]
    C -->|Bỏ qua| D
    D --> E[Viết code logic]
    E --> F>"Chạy thử: npm run dev [ID]"]
    F --> G{Đã ok chưa?}
    G -->|Chưa ok| E
    G -->|Hoàn tất| H[Git add & Commit]
    H --> I[[Pre-commit hook chạy]]
    I --> J[Tự động cập nhật danh sách ở README.md]
    J --> K[Prettier tự động format]
    K --> L((Hoàn thành))
```

## Các bước thực hiện:

1. **Khởi tạo tự động:** Chạy lệnh `npm run leetcode <ID>` (ví dụ: `npm run leetcode 202`). Hệ thống sẽ gọi API LeetCode để lấy đề bài, tạo sẵn thư mục `leetcode/202`, file `readme.md`, `metadata.json` chứa format cực chuẩn và file `index.ts` có sẵn code khởi tạo!
2. **Viết code:** Mở `leetcode/<ID>/index.ts` và bắt đầu viết code logic.
3. **Chạy thử code:** Dùng lệnh `npm run dev <ID>` để chạy test bằng terminal.
4. **Commit:** Sau khi code chạy đúng, chỉ việc Git Add và Commit. Hệ thống (qua Pre-commit hook) sẽ tự động chèn dữ liệu vào bảng danh sách bài ở file `readme.md` tổng (với đầy đủ các cột như Độ khó, Tags, Link gốc) và format lại đẹp mắt.
