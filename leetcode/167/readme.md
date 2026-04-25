# 167 - Two Sum II - Input Array Is Sorted

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

### Cách 1: Dùng Map

- Đọc đề bài thấy có "Input array is sorted" -> nghĩ ngay đến việc tối ưu bằng cách giảm độ phức tạp
- Nhưng bài toán này lại cho phép dùng extra space -> vậy ta nghĩ ngay đến việc dùng Map để lưu trữ index của các phần tử.
- Cách giải :
  - Duyệt qua mảng -> với mỗi phần tử check xem phần tử bù của nó đã có trong map chưa
    - Nếu có -> trả về index của nó và phần tử bù
    - Nếu không -> lưu vào map
- Độ phức tạp O(n)
- Space O(n)

### Cách 2: Dùng 2 con trỏ

## 2. Thông tin bài toán

- **Mức độ:** Medium
- **Nguồn:** [LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)

## 3. Mô tả đề bài

<p>Given a <strong>1-indexed</strong> array of integers <code>numbers</code> that is already <strong><em>sorted in non-decreasing order</em></strong>, find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index<sub>1</sub>]</code> and <code>numbers[index<sub>2</sub>]</code> where <code>1 &lt;= index<sub>1</sub> &lt; index<sub>2</sub> &lt;= numbers.length</code>.</p>

<p>Return<em> the indices of the two numbers&nbsp;</em><code>index<sub>1</sub></code><em> and </em><code>index<sub>2</sub></code><em>, <strong>each incremented by one,</strong> as an integer array </em><code>[index<sub>1</sub>, index<sub>2</sub>]</code><em> of length 2.</em></p>

<p>The tests are generated such that there is <strong>exactly one solution</strong>. You <strong>may not</strong> use the same element twice.</p>

<p>Your solution must use only constant extra space.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>2</u>,<u>7</u>,11,15], target = 9
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of 2 and 7 is 9. Therefore, index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>2</u>,3,<u>4</u>], target = 6
<strong>Output:</strong> [1,3]
<strong>Explanation:</strong> The sum of 2 and 4 is 6. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 3. We return [1, 3].
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> numbers = [<u>-1</u>,<u>0</u>], target = -1
<strong>Output:</strong> [1,2]
<strong>Explanation:</strong> The sum of -1 and 0 is -1. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2].
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= numbers.length &lt;= 3 * 10<sup>4</sup></code></li>
	<li><code>-1000 &lt;= numbers[i] &lt;= 1000</code></li>
	<li><code>numbers</code> is sorted in <strong>non-decreasing order</strong>.</li>
	<li><code>-1000 &lt;= target &lt;= 1000</code></li>
	<li>The tests are generated such that there is <strong>exactly one solution</strong>.</li>
</ul>
