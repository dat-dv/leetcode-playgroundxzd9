# 1859 - Sorting the Sentence

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

Ý tưởng cốt lõi là dùng phương pháp **Hai con trỏ (Two Pointers)** duyệt chuỗi từ trái sang phải, tách từng từ và đặt vào đúng vị trí của nó. Ta sẽ xử lý an toàn để bỏ qua các khoảng trắng thừa (nếu có):

- Dùng 1 con trỏ `left = 0` để đánh dấu vị trí bắt đầu của từ hiện tại.
- Khi duyệt đến vị trí `i`, nếu ký tự `s[i]` là một **con số**:
  - Ta cắt lấy từ hiện tại bằng `s.slice(left, i)` (lấy từ vị trí `left` đến ngay trước con số).
  - Đưa từ vừa cắt vào mảng tại vị trí tương ứng: `arr[Number(s[i]) - 1]`.
  - **Quan trọng:** Sau khi lấy xong từ, ta reset `left = undefined`.
- **Tại sao lại reset thành `undefined` mà không gán `left = i + 1`?**
  - Tránh rủi ro trường hợp có nhiều dấu cách liên tiếp phía sau con số.
  - Khi `left = undefined`, ở các vòng lặp tiếp theo ta chỉ cần đợi đến khi nào gặp một ký tự khác khoảng trắng (`val !== ' '`) thì mới cập nhật lại `left = i` để bắt đầu ghi nhận từ mới. Điều này giúp code chạy an toàn trong mọi trường hợp khoảng trắng!

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Nguồn:** [LeetCode](https://leetcode.com/problems/sorting-the-sentence/)

## 3. Mô tả đề bài

<p>A <strong>sentence</strong> is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.</p>

<p>A sentence can be <strong>shuffled</strong> by appending the <strong>1-indexed word position</strong> to each word then rearranging the words in the sentence.</p>

<ul>
	<li>For example, the sentence <code>&quot;This is a sentence&quot;</code> can be shuffled as <code>&quot;sentence4 a3 is2 This1&quot;</code> or <code>&quot;is2 sentence4 This1 a3&quot;</code>.</li>
</ul>

<p>Given a <strong>shuffled sentence</strong> <code>s</code> containing no more than <code>9</code> words, reconstruct and return <em>the original sentence</em>.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;is2 sentence4 This1 a3&quot;
<strong>Output:</strong> &quot;This is a sentence&quot;
<strong>Explanation:</strong> Sort the words in s to their original positions &quot;This1 is2 a3 sentence4&quot;, then remove the numbers.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;Myself2 Me1 I4 and3&quot;
<strong>Output:</strong> &quot;Me Myself and I&quot;
<strong>Explanation:</strong> Sort the words in s to their original positions &quot;Me1 Myself2 and3 I4&quot;, then remove the numbers.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= s.length &lt;= 200</code></li>
	<li><code>s</code> consists of lowercase and uppercase English letters, spaces, and digits from <code>1</code> to <code>9</code>.</li>
	<li>The number of words in <code>s</code> is between <code>1</code> and <code>9</code>.</li>
	<li>The words in <code>s</code> are separated by a single space.</li>
	<li><code>s</code> contains no leading or trailing spaces.</li>
</ul>
