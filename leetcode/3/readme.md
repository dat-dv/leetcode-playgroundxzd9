# 3 - Longest Substring Without Repeating Characters

## 1. Ý tưởng / Lời giải

Sử dụng kỹ thuật **Sliding Window** (Cửa sổ trượt) biến thiên kết hợp với một **Set** để theo dõi các ký tự duy nhất:

- **Mở rộng (Right):** Duyệt qua từng ký tự của chuỗi bằng con trỏ `right`.
- **Thanh trừng (While Loop):** Nếu ký tự hiện tại đã tồn tại trong `Set` (vi phạm tính duy nhất):
  - Liên tục xóa ký tự tại vị trí `left` khỏi `Set` và tăng `left` lên.
  - Hành động này giống như việc "đuổi" các hành khách cũ ra khỏi xe bus cho đến khi không còn ai trùng lặp với người mới sắp lên.
- **Ghi nhận (Update):** Sau khi cửa sổ đã hợp lệ, cập nhật `longest = Math.max(longest, set.size)`.

**Độ phức tạp:**

- **Time:** $O(n)$ — Mỗi ký tự chỉ được `left` và `right` ghé thăm tối đa 1 lần.
- **Space:** $O(min(n, m))$ — Với $m$ là kích thước của bộ ký tự (charset).

## 2. Thông tin bài toán

- **Mức độ:** Medium
- **Chủ đề:** Hash Table, String, Sliding Window
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

## 3. Mô tả đề bài

<p>Given a string <code>s</code>, find the length of the <strong>longest</strong> <span data-keyword="substring-nonempty"><strong>substring</strong></span> without duplicate characters.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abcabcbb&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;abc&quot;, with the length of 3. Note that <code>&quot;bca&quot;</code> and <code>&quot;cab&quot;</code> are also correct answers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;bbbbb&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The answer is &quot;b&quot;, with the length of 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;pwwkew&quot;
<strong>Output:</strong> 3
<strong>Explanation:</strong> The answer is &quot;wke&quot;, with the length of 3.
Notice that the answer must be a substring, &quot;pwke&quot; is a subsequence and not a substring.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>s</code> consists of English letters, digits, symbols and spaces.</li>
</ul>
