# 292 - Nim Game

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

- Mình bốc xong mà còn còn lại 4 -> 8 - 12 - 16 là mình sẽ thắng
- Bạn bốc xong mà còn 5 6 7 , 9 10 11, 13 14 15 là bạn thua;
- Nhìn vào ta thấy nếu mà đề bài cố tình cho n là bội số của 4 thì mình sẽ thua
- Vì mình bốc trước nên sẽ luôn chừa lại 1 số lẻ sau đó bạn lại trả về bội số 4
- Đến lượt cuối cùng bạn bốc sao cho ra 4 là mình thua

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Math, Brainteaser, Game Theory
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/nim-game/)

## 3. Mô tả đề bài

<p>You are playing the following Nim Game with your friend:</p>

<ul>
	<li>Initially, there is a heap of stones on the table.</li>
	<li>You and your friend will alternate taking turns, and <strong>you go first</strong>.</li>
	<li>On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.</li>
	<li>The one who removes the last stone is the winner.</li>
</ul>

<p>Given <code>n</code>, the number of stones in the heap, return <code>true</code><em> if you can win the game assuming both you and your friend play optimally, otherwise return </em><code>false</code>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> n = 4
<strong>Output:</strong> false
<strong>Explanation:</strong> These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 1
<strong>Output:</strong> true
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 2
<strong>Output:</strong> true
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
