# LeetCode Solutions & JS/TS Playground

Repo dùng làm playground để giải thuật toán LeetCode, hỗ trợ cả JavaScript và TypeScript.

**LeetCode Profile**: [dat-dv](https://leetcode.com/u/dat-dv/)

## Hướng dẫn sử dụng

### 1. Khởi tạo bài toán mới

Tự động tải thông tin bài toán, tạo thư mục và file boilerplate (TypeScript/JavaScript) từ LeetCode:

```bash
npm run leetcode <ID_BÀI_TOÁN>

# Ví dụ: npm run leetcode 202
```

### 2. Chạy code và kiểm tra kết quả

Sử dụng script để thực thi lời giải của bạn:

```bash
# Chạy script tương tác để chọn bài cần thực thi
npm run dev

# Hoặc chạy trực tiếp bài cụ thể bằng ID
npm run dev 202
```

## Quy trình làm việc

Xem chi tiết trong file [WORKFLOW.md](./WORKFLOW.md).

## Tài nguyên học tập

Để luyện tập hiệu quả, nên tập trung vào các **LeetCode Patterns** thay vì giải bài ngẫu nhiên:

- [LeetCode Patterns Checklist](./PATTERNS.md) — Theo dõi tiến độ giải các dạng toán quan trọng.
- <a href="https://seanprashad.com/leetcode-patterns" target="_blank" rel="noopener noreferrer">LeetCode Patterns (by Sean Prashad)</a> — Danh sách các bài toán kinh điển được phân loại theo kỹ thuật và cấu trúc dữ liệu để nắm vững tư duy giải quyết vấn đề.

## Danh sách bài tập đã giải

<!-- LEETCODE_START -->

| STT | Bài toán                                                                | Mức độ | Chủ đề                                                            | Link gốc                                                                                        |
| --- | ----------------------------------------------------------------------- | ------ | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1   | [Longest Substring Without Repeating Characters](./leetcode/3)          | Medium | Hash Table, String, Sliding Window                                | [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)       |
| 2   | [Merge Two Sorted Lists](./leetcode/21)                                 | Easy   | Linked List, Recursion                                            | [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)                               |
| 3   | [Group Anagrams](./leetcode/49)                                         | Medium | Array, Hash Table, String, Sorting                                | [LeetCode](https://leetcode.com/problems/group-anagrams/)                                       |
| 4   | [Majority Element](./leetcode/169)                                      | Easy   | Array, Hash Table, Divide and Conquer, Sorting, Counting          | [LeetCode](https://leetcode.com/problems/majority-element/)                                     |
| 5   | [Happy Number](./leetcode/202)                                          | Easy   | Hash Table, Math, Two Pointers                                    | [LeetCode](https://leetcode.com/problems/happy-number/)                                         |
| 6   | [Contains Duplicate](./leetcode/217)                                    | Easy   | Array, Hash Table, Sorting                                        | [LeetCode](https://leetcode.com/problems/contains-duplicate/)                                   |
| 7   | [Implement Queue using Stacks](./leetcode/232)                          | Easy   | Stack, Design, Queue                                              | [LeetCode](https://leetcode.com/problems/implement-queue-using-stacks/)                         |
| 8   | [Missing Number](./leetcode/268)                                        | Easy   | Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting | [LeetCode](https://leetcode.com/problems/missing-number/)                                       |
| 9   | [First Bad Version](./leetcode/278)                                     | Easy   | Binary Search, Interactive                                        | [LeetCode](https://leetcode.com/problems/first-bad-version/)                                    |
| 10  | [Nim Game](./leetcode/292)                                              | Easy   | Math, Brainteaser, Game Theory                                    | [LeetCode](https://leetcode.com/problems/nim-game/)                                             |
| 11  | [Power of Three](./leetcode/326)                                        | Easy   | Math, Recursion                                                   | [LeetCode](https://leetcode.com/problems/power-of-three/)                                       |
| 12  | [Intersection of Two Arrays](./leetcode/349)                            | Easy   | Array, Hash Table, Two Pointers, Binary Search, Sorting           | [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays/)                           |
| 13  | [Squares of a Sorted Array](./leetcode/977)                             | Easy   | Array, Two Pointers, Sorting                                      | [LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/)                            |
| 14  | [Relative Sort Array](./leetcode/1122)                                  | Easy   | Array, Hash Table, Sorting, Counting Sort                         | [LeetCode](https://leetcode.com/problems/relative-sort-array/)                                  |
| 15  | [How Many Numbers Are Smaller Than the Current Number](./leetcode/1365) | Easy   | Array, Hash Table, Sorting, Counting Sort                         | [LeetCode](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/) |
| 16  | [Find Target Indices After Sorting Array](./leetcode/2089)              | Easy   | Array, Binary Search, Sorting                                     | [LeetCode](https://leetcode.com/problems/find-target-indices-after-sorting-array/)              |

<!-- LEETCODE_END -->
