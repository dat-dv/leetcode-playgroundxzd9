# 20 - Valid Parentheses

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Có 2 điều cần lưu ý
  1. Độ dài string phải là số chẵn
  2. Ngoặc hợp lệ nếu
  - ngoặc ở đầu mở. ngoặc kế bên đóng
  - ngoặc ở đầu mở. ngoặc ở cuối đóng

- Nhờ tính chất thứ 1 ta dùng stack để loại bỏ các cặp ngoặc hợp lệ này đi
  - Chỉ còn trường hợp nếu đầu mở thì đuôi phải đóng,
  - Như thế chỉ cần lặp 1 nửa, nếu gặp ở đầu mà mở thì đuôi phải đóng, nếu ở đầu mà đóng là sai

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Nguồn:** [LeetCode](https://leetcode.com/problems/valid-parentheses/)

## 3. Mô tả đề bài

<p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
	<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;()&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;()[]{}&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;(]&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;([])&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 5:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;([)]&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>
</ul>
