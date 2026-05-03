# 409 - Longest Palindrome

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Bài này có 2 cách giải đơn giản nhất:
  - Dùng hashmap để count các kí tự: duyệt qua
  - Dùng array + ascii code để count các kí tự

### Cách 1 : Dùng hashmap để count các kí tự

- Cứ mỗi lần loop qua cái char ở trong string
  - Nếu nó tồn tại trong map thì tăng giá trị lên 1
  - Nếu chưa thì set nó là 1
- Sau khi duyệt xong string thì ta sẽ duyệt sang hashmap để count số lần xuất hiện của từng kí tự
  - Vì đề bài yêu cầu longest palindarome -> nên ta chỉ lấy các chữ xuất hiện là chẵn để đưa vào result
  - Ví dụ chữ a xuất hiện 7 lần -> ta chỉ lấy 6
  - Ví dụ chữ b xuất hiện 2 lần -> ta lấy 2
  - Kết quả trả về result nếu length của s > result thì + 1 vào result vì có 1 kí tự có thể ở giữa
  - Ví dụ : s = "abccccdd" -> count map
    - a = 1
    - b = 1
    - c = 4
    - d = 2
    - result = 4 + 2 = 6
    - length s = 8 > result = 6 -> result + 1 = 7
  - Còn nếu bằng thì chuỗi string đó là chuỗi chẵn -> trả về luôn result -> (ví dụ: aabb -> 4)

### Cách 2: Dùng array + ascii code để count các kí tự

- Tạo 1 array length = 52
  - Trong bảng ascii ta có:
    - a-z : 97 - 122
    - A-Z : 65 - 90
  - Vậy nếu ta xét 1 mảng có 52 phần tử để chứa a-z và A-Z
    - Giả sử a-z ở index 0 - 25
    - A-Z ở index 26 - 51
  - Mỗi lần duyệt qua cái char ở trong string
    - Nếu char đó có code >= 97 thì ta trừ 97 đi để lấy được index
    - Ngược lại thì ta trừ 65 rồi cộng thêm 26 để lấy được index của chữ viết hoa ( cần + 26 đề dời index của chữ viết hoa lên vị trí index 26 )

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Nguồn:** [LeetCode](https://leetcode.com/problems/longest-palindrome/)

## 3. Mô tả đề bài

<p>Given a string <code>s</code> which consists of lowercase or uppercase letters, return the length of the <strong>longest <span data-keyword="palindrome-string">palindrome</span></strong>&nbsp;that can be built with those letters.</p>

<p>Letters are <strong>case sensitive</strong>, for example, <code>&quot;Aa&quot;</code> is not considered a palindrome.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;abccccdd&quot;
<strong>Output:</strong> 7
<strong>Explanation:</strong> One longest palindrome that can be built is &quot;dccaccd&quot;, whose length is 7.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;a&quot;
<strong>Output:</strong> 1
<strong>Explanation:</strong> The longest palindrome that can be built is &quot;a&quot;, whose length is 1.
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 2000</code></li>
	<li><code>s</code> consists of lowercase <strong>and/or</strong> uppercase English&nbsp;letters only.</li>
</ul>
