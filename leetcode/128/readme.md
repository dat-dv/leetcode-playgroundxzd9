# 128 - Longest Consecutive Sequence

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Ý tưởng tìm tổng số phần tử liên tiếp nhiều nhất
  - Đầu tiên dùng set để loại bỏ các phần tử trùng nhau,
  - Sau đó lặp qua từng item
    - Nếu như item đó nó có item lớn hơn trong set thì bỏ qua ( tránh trường hợp bị trùng)
    - Nếu item đó nó có phần tử nhỏ hơn nó 1 đơn vị thì tạm thời tăng count lên 1 và tiếp tục dùng while để check next item cho đến khi không tìm thấy phần tử tiếp theo thì dừng.
    - Sau khi kết thúc while nếu số lần xuất hiện nhiều hơn số lần xuất hiện của lần gần nhất thì ta thay thế k thì thôi

## 2. Thông tin bài toán

- **Mức độ:** Medium
- **Nguồn:** [LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/)

## 3. Mô tả đề bài

<p>Given an unsorted array of integers <code>nums</code>, return <em>the length of the longest consecutive elements sequence.</em></p>

<p>You must write an algorithm that runs in&nbsp;<code>O(n)</code>&nbsp;time.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [100,4,200,1,3,2]
<strong>Output:</strong> 4
<strong>Explanation:</strong> The longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Therefore its length is 4.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,3,7,2,5,8,4,6,0,1]
<strong>Output:</strong> 9
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [1,0,1,2]
<strong>Output:</strong> 3
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
