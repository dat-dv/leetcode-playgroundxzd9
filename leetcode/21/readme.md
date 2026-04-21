# 21 - Merge Two Sorted Lists

## 1. Ý tưởng / Lời giải

- Dùng 1 pointer cố định (`head`) để làm gốc.
- Dùng 1 pointer di động (`out`) để xây dựng danh sách.
- Trong vòng lặp `while (list1 || list2)`:
  - So sánh giá trị từ 2 list hoặc lấy giá trị từ list còn lại.
  - Tạo một **node hoàn toàn mới** `new ListNode(val)` và nối vào `out.next`.
  - Dịch chuyển `out` lên chính node mới tạo đó.
- Trả về `head.next`.

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Linked List, Recursion
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)

## 3. Mô tả đề bài

<p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p>

<p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p>

<p>Return <em>the head of the merged linked list</em>.</p>

<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" style="width: 662px; height: 302px;" />
<pre>
<strong>Input:</strong> list1 = [1,2,4], list2 = [1,3,4]
<strong>Output:</strong> [1,1,2,3,4,4]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> list1 = [], list2 = []
<strong>Output:</strong> []
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> list1 = [], list2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
	<li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li>
</ul>
