# 169 - Majority Element

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->
- Nếu dùng hash table để lưu bài toán này sẽ phải giải với độ phức tạp O(n) space và O(n) time
- Ý tưởng : Nếu 1 số xuất hiện nhiều hơn 1 nửa thì ta chỉ cần duyệt từ đầu đến cuối để đếm số phần tử, nếu có phần tử trùng nhau thì +1 nếu khác nhau thì -1, nếu count = 0 và chỉ cần count > 1/2 thì dừng 
## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Array, Hash Table, Divide and Conquer, Sorting, Counting
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/majority-element/)

## 3. Mô tả đề bài

<p>Given an array <code>nums</code> of size <code>n</code>, return <em>the majority element</em>.</p>

<p>The majority element is the element that appears more than <code>&lfloor;n / 2&rfloor;</code> times. You may assume that the majority element always exists in the array.</p>

<p><strong class="example">Example 1:</strong></p>
<pre><strong>Input:</strong> nums = [3,2,3]
<strong>Output:</strong> 3
</pre><p><strong class="example">Example 2:</strong></p>
<pre><strong>Input:</strong> nums = [2,2,1,1,1,2,2]
<strong>Output:</strong> 2
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == nums.length</code></li>
	<li><code>1 &lt;= n &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li>The input is generated such that a majority element will exist in the array.</li>
</ul>

<strong>Follow-up:</strong> Could you solve the problem in linear time and in <code>O(1)</code> space?
