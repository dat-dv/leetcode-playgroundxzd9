# 349 - Intersection of Two Arrays

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

- Sử dụng `Set` để lưu các phần tử của mảng `nums1`
- `Set.has()` có độ phức tạp trung bình **O(1)** → kiểm tra tồn tại nhanh
- Duyệt qua mảng `nums2`:
  - Nếu phần tử tồn tại trong `Set`:
    - Thêm vào `result`
    - Xóa khỏi `Set` để tránh trùng lặp
- Trả về mảng kết quả

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Array, Hash Table, Two Pointers, Binary Search, Sorting
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/intersection-of-two-arrays/)

## 3. Mô tả đề bài

<p>Given two integer arrays <code>nums1</code> and <code>nums2</code>, return <em>an array of their <span data-keyword="array-intersection">intersection</span></em>. Each element in the result must be <strong>unique</strong> and you may return the result in <strong>any order</strong>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [1,2,2,1], nums2 = [2,2]
<strong>Output:</strong> [2]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums1 = [4,9,5], nums2 = [9,4,9,8,4]
<strong>Output:</strong> [9,4]
<strong>Explanation:</strong> [4,9] is also accepted.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li>
</ul>
