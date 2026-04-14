# 2089 - Find Target Indices After Sorting Array

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

- Tận dụng JS sort (bên dưới được implements đã tối ưu theo engine) . Độ phức tạp chủ yếu nằm ở mức Complexity:
  - Best: O(n)
  - Average: O(n log n)
  - Worst: O(n log n)

- Sau khi sort thì duyệt qua mảng và tìm target nhưng sẽ dừng khi mà nums[i] > target
  - vì mảng đã sort theo thứ tự tăng dần nên không cần duyệt hết

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Array, Binary Search, Sorting
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/find-target-indices-after-sorting-array/)

## 3. Mô tả đề bài

<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> and a target element <code>target</code>.</p>

<p>A <strong>target index</strong> is an index <code>i</code> such that <code>nums[i] == target</code>.</p>

<p>Return <em>a list of the target indices of</em> <code>nums</code> after<em> sorting </em><code>nums</code><em> in <strong>non-decreasing</strong> order</em>. If there are no target indices, return <em>an <strong>empty</strong> list</em>. The returned list must be sorted in <strong>increasing</strong> order.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,5,2,3], target = 2
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> After sorting, nums is [1,<u><strong>2</strong></u>,<u><strong>2</strong></u>,3,5].
The indices where nums[i] == 2 are 1 and 2.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,5,2,3], target = 3
<strong>Output:</strong> [3]
<strong>Explanation:</strong> After sorting, nums is [1,2,2,<u><strong>3</strong></u>,5].
The index where nums[i] == 3 is 3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,2,5,2,3], target = 5
<strong>Output:</strong> [4]
<strong>Explanation:</strong> After sorting, nums is [1,2,2,3,<u><strong>5</strong></u>].
The index where nums[i] == 5 is 4.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>1 &lt;= nums[i], target &lt;= 100</code></li>
</ul>
