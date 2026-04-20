# 977 - Squares of a Sorted Array

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

Đề bài cho mảng đã sort từ nhỏ đến lớn ( - âm -> 0 -> + dương )

- Yêu cầu : trả về mảng bình phương các số và sort lại từ nhỏ đến lớn
  <br/>
- Vì sau khi bình phương ta luôn luôn thu được số dương, nên chỉ cần loop qua 1 lần 1;
- Cứ 1 lần lặp thì ta sẽ lấy được số lớn nhất ( vì bình phương lớn nhất sẽ ở 2 đầu của mảng )
- Nếu chỉ cần left ** 2 > right ** 2 thì ta sẽ lấy left ** 2 và gán vào cuối mảng kết quả, ngược lại thì lấy right ** 2 và gán vào cuối mảng kết quả

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Array, Two Pointers, Sorting
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/)

## 3. Mô tả đề bài

<p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing</strong> order, return <em>an array of <strong>the squares of each number</strong> sorted in non-decreasing order</em>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-4,-1,0,3,10]
<strong>Output:</strong> [0,1,9,16,100]
<strong>Explanation:</strong> After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [-7,-3,2,3,11]
<strong>Output:</strong> [4,9,9,49,121]
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code><span>1 &lt;= nums.length &lt;= </span>10<sup>4</sup></code></li>
	<li><code>-10<sup>4</sup> &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
	<li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li>
</ul>

<strong>Follow up:</strong> Squaring each element and sorting the new array is very trivial, could you find an <code>O(n)</code> solution using a different approach?
