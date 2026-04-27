# 704 - Binary Search

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Kỹ thuật tìm kiếm nhị phân áp dụng cho mảng đã sắp xếp để tìm kiếm giá trị target
- mid luôn luôn chia đôi mảng để tìm kiếm giá trị target ( mid = floor((left + right) /2 ))
  - nếu nums[mid] = target -> return mid
  - nếu nums[mid] > target => right = mid - 1 (target nằm bên trái)
  - nếu nums[mid] < target => left = mid + 1 (target nằm bên phải)

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Nguồn:** [LeetCode](https://leetcode.com/problems/binary-search/)

## 3. Mô tả đề bài

<p>Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.</p>

<p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 9
<strong>Output:</strong> 4
<strong>Explanation:</strong> 9 exists in nums and its index is 4
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,3,5,9,12], target = 2
<strong>Output:</strong> -1
<strong>Explanation:</strong> 2 does not exist in nums so return -1
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt; nums[i], target &lt; 10<sup>4</sup></code></li>
	<li>All the integers in <code>nums</code> are <strong>unique</strong>.</li>
	<li><code>nums</code> is sorted in ascending order.</li>
</ul>
