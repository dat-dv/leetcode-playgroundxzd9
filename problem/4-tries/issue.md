---
title: '[LEARN] #4-tries - Unresolved Problem'
labels: Arrays & Hashing
issueId: 10
---

# Unresolved Problem

### 🎯 1. WHAT & WHY (Bản chất & Tại sao)

- Array : Access O(1) | Random Insert/Delete O(N) | Search O(logN) nếu dữ liệu có sắp xếp, O(N) nếu không sắp xếp → ❌ Không tối ưu cho string và prefix
- Linked List : Access O(N) | Insert/Delete O(1) (khi đã có node) | Search O(N) vì vẫn phải duyệt → ❌ Không phù hợp cho search
- HashMap : Access O(1) | Insert/Delete O(1) → ❌ Chỉ hỗ trợ exact match, không hỗ trợ prefix (ví dụ: "app" → "apple")
- HashSet : Access O(1) | Insert/Delete O(1) → ❌ Tương tự HashMap, không hỗ trợ prefix
- BST : Access O(logN) | Insert/Delete O(logN) → ✔ Có thứ tự nhưng ❌ không tối ưu cho string và prefix (so sánh từng ký tự)

### 💡 2. PATTERN QUESTIONS (Các bài toán vận dụng)

- Từ điển có wildcard: tìm với ký tự "\*"
- Gợi ý tìm kiếm: nhập prefix trả về danh sách từ - Cài đặt

### 🔗 3. REFERENCE

- Tài liệu tham khảo, bài viết hoặc video hướng dẫn.
