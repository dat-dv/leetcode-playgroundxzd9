# 2103 - Rings and Rods

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Các 9 cột được đánh label từ 0 -> 9
- Mỗi cột có thể đựng nhiều ring -> ring có màu: R, G, B
- Tìm số cột mà trong đó mỗi cột có đủ 3 màu R, G, B

- Ý tưởng tạo 1 mảng 2 chiều chứa màu của từng cột
  - length = 10 (cột từ 0 -> 9)
  - mỗi cột là 1 array chứa màu
  - Ví dụ: rings = "B0B6G0R6R0R6G9"
    - mapData = [[], [], [], [], [], [], [], [], [], []]
    - B0 -> mapData[0] = ["B"]
    - B6 -> mapData[6] = ["B"]
    - G0 -> mapData[0] = ["B", "G"]
    - R6 -> mapData[6] = ["B", "R"]
    - R0 -> mapData[0] = ["B", "G", "R"]
    - R6 -> mapData[6] = ["B", "R"]
    - G9 -> mapData[9] = ["G"]
- Theo đề bài thì ta sẽ dùng 2 con trỏ left và right để duyệt qua chuỗi rings (với left sẽ là ring color | right sẽ là cột)
  - left = i \* 2, right = left + 1
  - Chỉ cần duyệt length /2
- Mỗi lần duyệt qua các ring: check color có tồn tại trong array chưa, nếu chưa thì add vào, nếu đã có 3 màu rồi thì + 1 vào result

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Nguồn:** [LeetCode](https://leetcode.com/problems/rings-and-rods/)

## 3. Mô tả đề bài

<p>There are <code>n</code> rings and each ring is either red, green, or blue. The rings are distributed <strong>across ten rods</strong> labeled from <code>0</code> to <code>9</code>.</p>

<p>You are given a string <code>rings</code> of length <code>2n</code> that describes the <code>n</code> rings that are placed onto the rods. Every two characters in <code>rings</code> forms a <strong>color-position pair</strong> that is used to describe each ring where:</p>

<ul>
	<li>The <strong>first</strong> character of the <code>i<sup>th</sup></code> pair denotes the <code>i<sup>th</sup></code> ring&#39;s <strong>color</strong> (<code>&#39;R&#39;</code>, <code>&#39;G&#39;</code>, <code>&#39;B&#39;</code>).</li>
	<li>The <strong>second</strong> character of the <code>i<sup>th</sup></code> pair denotes the <strong>rod</strong> that the <code>i<sup>th</sup></code> ring is placed on (<code>&#39;0&#39;</code> to <code>&#39;9&#39;</code>).</li>
</ul>

<p>For example, <code>&quot;R3G2B1&quot;</code> describes <code>n == 3</code> rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.</p>

<p>Return <em>the number of rods that have <strong>all three colors</strong> of rings on them.</em></p>

<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/23/ex1final.png" style="width: 258px; height: 130px;" />
<pre>
<strong>Input:</strong> rings = &quot;B0B6G0R6R0R6G9&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> 
- The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
- The rod labeled 6 holds 3 rings, but it only has red and blue.
- The rod labeled 9 holds only a green ring.
Thus, the number of rods with all three colors is 1.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2021/11/23/ex2final.png" style="width: 266px; height: 130px;" />
<pre>
<strong>Input:</strong> rings = &quot;B0R0G0R9R0B0G0&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> 
- The rod labeled 0 holds 6 rings with all colors: red, green, and blue.
- The rod labeled 9 holds only a red ring.
Thus, the number of rods with all three colors is 1.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> rings = &quot;G4&quot;
<strong>Output:</strong> 0
<strong>Explanation:</strong> 
Only one ring is given. Thus, no rods have all three colors.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>rings.length == 2 * n</code></li>
	<li><code>1 &lt;= n &lt;= 100</code></li>
	<li><code>rings[i]</code> where <code>i</code> is <strong>even</strong> is either <code>&#39;R&#39;</code>, <code>&#39;G&#39;</code>, or <code>&#39;B&#39;</code> (<strong>0-indexed</strong>).</li>
	<li><code>rings[i]</code> where <code>i</code> is <strong>odd</strong> is a digit from <code>&#39;0&#39;</code> to <code>&#39;9&#39;</code> (<strong>0-indexed</strong>).</li>
</ul>
