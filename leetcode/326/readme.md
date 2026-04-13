# 326 - Power of Three

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

Cách giải bài này dùng đệ quy:

- Recursive case: cứ mỗi lần thì sẽ giảm n = n/3 sau đó gọi lại
- Base case: n = 1 thì return true, n < 3 thì return false

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Math, Recursion
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/power-of-three/)

## 3. Mô tả đề bài

<p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of three. Otherwise, return <code>false</code></em>.</p>

<p>An integer <code>n</code> is a power of three, if there exists an integer <code>x</code> such that <code>n == 3<sup>x</sup></code>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 27
<strong>Output:</strong> true
<strong>Explanation:</strong> 27 = 3<sup>3</sup>
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 0
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no x where 3<sup>x</sup> = 0.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = -1
<strong>Output:</strong> false
<strong>Explanation:</strong> There is no x where 3<sup>x</sup> = (-1).
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>

<strong>Follow up:</strong> Could you solve it without loops/recursion?
