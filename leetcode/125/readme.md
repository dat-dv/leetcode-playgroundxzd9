# 125 - Valid Palindrome

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

### Cách 1:

- Bài này có 1 điểm cần chú ý:
  - "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters"
  - Tức là "A phrase is a palindrome" là 1 chuỗi đối xứng, ban đầu chuỗi input thô sẽ gồm nhiều kí tự -> cần chuyển đổi bằng cách remove đi các kí tự đặc biệt và chuyển hết về chữ thường, lưu ý **không remove số | all non-alphanumeric characters** chấp nhận chữ và số.
  - Sau khi đã làm sạch chuỗi -> tiến hành so sánh 2 đầu vào và kiểm tra có đối xứng không.
- Bài này giải bằng cách dùng regex để remove các kí tự không cần thiết.
- Sau đó dùng 2 con trỏ để so sánh 2 đầu vào và kiểm tra có đối xứng không.

### Cách 2:

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Nguồn:** [LeetCode](https://leetcode.com/problems/valid-palindrome/)

## 3. Mô tả đề bài

<p>A phrase is a <strong>palindrome</strong> if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.</p>

<p>Given a string <code>s</code>, return <code>true</code><em> if it is a <strong>palindrome</strong>, or </em><code>false</code><em> otherwise</em>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;A man, a plan, a canal: Panama&quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> &quot;amanaplanacanalpanama&quot; is a palindrome.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;race a car&quot;
<strong>Output:</strong> false
<strong>Explanation:</strong> &quot;raceacar&quot; is not a palindrome.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot; &quot;
<strong>Output:</strong> true
<strong>Explanation:</strong> s is an empty string &quot;&quot; after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2 * 10<sup>5</sup></code></li>
	<li><code>s</code> consists only of printable ASCII characters.</li>
</ul>
