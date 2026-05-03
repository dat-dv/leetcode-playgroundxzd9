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

| STT | Bài toán                                                                | Mức độ | Chủ đề                                                                                                    | Link gốc                                                                                        |
| --- | ----------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 1   | [Longest Substring Without Repeating Characters](./leetcode/3)          | Medium | Hash Table, String, Sliding Window                                                                        | [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)       |
| 2   | [Container With Most Water](./leetcode/11)                              | Medium | Array, Two Pointers, Greedy                                                                               | [LeetCode](https://leetcode.com/problems/container-with-most-water/)                            |
| 3   | [Valid Parentheses](./leetcode/20)                                      | Easy   | String, Stack                                                                                             | [LeetCode](https://leetcode.com/problems/valid-parentheses/)                                    |
| 4   | [Merge Two Sorted Lists](./leetcode/21)                                 | Easy   | Linked List, Recursion                                                                                    | [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)                               |
| 5   | [Group Anagrams](./leetcode/49)                                         | Medium | Array, Hash Table, String, Sorting                                                                        | [LeetCode](https://leetcode.com/problems/group-anagrams/)                                       |
| 6   | [Remove Duplicates from Sorted List](./leetcode/83)                     | Easy   | Linked List                                                                                               | [LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)                   |
| 7   | [Maximum Depth of Binary Tree](./leetcode/104)                          | Easy   | Tree, Depth-First Search, Breadth-First Search, Binary Tree                                               | [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)                         |
| 8   | [Convert Sorted Array to Binary Search Tree](./leetcode/108)            | Easy   | Array, Divide and Conquer, Tree, Binary Search Tree, Binary Tree                                          | [LeetCode](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)           |
| 11  | [Valid Palindrome](./leetcode/125)                                      | Easy   | Two Pointers, String                                                                                      | [LeetCode](https://leetcode.com/problems/valid-palindrome/)                                     |
| 12  | [Longest Consecutive Sequence](./leetcode/128)                          | Medium | Array, Hash Table, Union-Find                                                                             | [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/)                         |
| 13  | [Min Stack](./leetcode/155)                                             | Medium | Stack, Design                                                                                             | [LeetCode](https://leetcode.com/problems/min-stack/)                                            |
| 14  | [Two Sum II - Input Array Is Sorted](./leetcode/167)                    | Medium | Array, Two Pointers, Binary Search                                                                        | [LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)                     |
| 15  | [Majority Element](./leetcode/169)                                      | Easy   | Array, Hash Table, Divide and Conquer, Sorting, Counting                                                  | [LeetCode](https://leetcode.com/problems/majority-element/)                                     |
| 16  | [Happy Number](./leetcode/202)                                          | Easy   | Hash Table, Math, Two Pointers                                                                            | [LeetCode](https://leetcode.com/problems/happy-number/)                                         |
| 17  | [Contains Duplicate](./leetcode/217)                                    | Easy   | Array, Hash Table, Sorting                                                                                | [LeetCode](https://leetcode.com/problems/contains-duplicate/)                                   |
| 18  | [Implement Queue using Stacks](./leetcode/232)                          | Easy   | Stack, Design, Queue                                                                                      | [LeetCode](https://leetcode.com/problems/implement-queue-using-stacks/)                         |
| 19  | [Missing Number](./leetcode/268)                                        | Easy   | Array, Hash Table, Math, Binary Search, Bit Manipulation, Sorting                                         | [LeetCode](https://leetcode.com/problems/missing-number/)                                       |
| 20  | [First Bad Version](./leetcode/278)                                     | Easy   | Binary Search, Interactive                                                                                | [LeetCode](https://leetcode.com/problems/first-bad-version/)                                    |
| 21  | [Nim Game](./leetcode/292)                                              | Easy   | Math, Brainteaser, Game Theory                                                                            | [LeetCode](https://leetcode.com/problems/nim-game/)                                             |
| 22  | [Power of Three](./leetcode/326)                                        | Easy   | Math, Recursion                                                                                           | [LeetCode](https://leetcode.com/problems/power-of-three/)                                       |
| 23  | [Top K Frequent Elements](./leetcode/347)                               | Medium | Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect | [LeetCode](https://leetcode.com/problems/top-k-frequent-elements/)                              |
| 24  | [Intersection of Two Arrays](./leetcode/349)                            | Easy   | Array, Hash Table, Two Pointers, Binary Search, Sorting                                                   | [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays/)                           |
| 25  | [Longest Palindrome](./leetcode/409)                                    | Easy   | Hash Table, String, Greedy                                                                                | [LeetCode](https://leetcode.com/problems/longest-palindrome/)                                   |
| 27  | [Binary Search](./leetcode/704)                                         | Easy   | Array, Binary Search                                                                                      | [LeetCode](https://leetcode.com/problems/binary-search/)                                        |
| 28  | [Shortest Completing Word](./leetcode/748)                              | Easy   | Array, Hash Table, String                                                                                 | [LeetCode](https://leetcode.com/problems/shortest-completing-word/)                             |
| 29  | [Squares of a Sorted Array](./leetcode/977)                             | Easy   | Array, Two Pointers, Sorting                                                                              | [LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/)                            |
| 30  | [Last Stone Weight](./leetcode/1046)                                    | Easy   | Array, Heap (Priority Queue)                                                                              | [LeetCode](https://leetcode.com/problems/last-stone-weight/)                                    |
| 31  | [Relative Sort Array](./leetcode/1122)                                  | Easy   | Array, Hash Table, Sorting, Counting Sort                                                                 | [LeetCode](https://leetcode.com/problems/relative-sort-array/)                                  |
| 32  | [How Many Numbers Are Smaller Than the Current Number](./leetcode/1365) | Easy   | Array, Hash Table, Sorting, Counting Sort                                                                 | [LeetCode](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/) |
| 33  | [Sorting the Sentence](./leetcode/1859)                                 | Easy   | String, Sorting                                                                                           | [LeetCode](https://leetcode.com/problems/sorting-the-sentence/)                                 |
| 34  | [Find Target Indices After Sorting Array](./leetcode/2089)              | Easy   | Array, Binary Search, Sorting                                                                             | [LeetCode](https://leetcode.com/problems/find-target-indices-after-sorting-array/)              |
| 35  | [Rings and Rods](./leetcode/2103)                                       | Easy   | Hash Table, String                                                                                        | [LeetCode](https://leetcode.com/problems/rings-and-rods/)                                       |
| 36  | [Interval Cancellation](./leetcode/2725)                                | Easy   |                                                                                                           | [LeetCode](https://leetcode.com/problems/interval-cancellation/)                                |

<!-- LEETCODE_END -->
