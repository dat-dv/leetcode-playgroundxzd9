# 1122 - Relative Sort Array

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

- Ý tưởng của bài này là CTDL Map trong JS :
  - Nó luôn đảm bảo thứ tự khi chúng ta insert vào
    - Từ đó ta có thể dùng nó để loop O(n) đếm số lần xuất hiện của từng số trong arr1 và lưu lại vào map; và số mà không tồn tại ở arr2 ta đưa vào 1 mảng riêng
    - Từ việc giữ lại vị trí khi add key vào map, ta có thể loop O(n) qua arr2 và push vào result theo số lần xuất hiện
    - Sau đó chúng ta loop qua map và push vào result theo số lần xuất hiện
    - Từ mảng các items k xuất hiện ta sort nó và push vào result

- Đáp ứng yêu cầu bài toán là, sắp xếp lại arr1 theo arr2 và những số không xuất hiện ở arr2 thì đưa vào cuối arr1 theo thứ tự tăng dần

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Array, Hash Table, Sorting, Counting Sort
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/relative-sort-array/)

## 3. Mô tả đề bài

<p>Given two arrays <code>arr1</code> and <code>arr2</code>, the elements of <code>arr2</code> are distinct, and all elements in <code>arr2</code> are also in <code>arr1</code>.</p>

<p>Sort the elements of <code>arr1</code> such that the relative ordering of items in <code>arr1</code> are the same as in <code>arr2</code>. Elements that do not appear in <code>arr2</code> should be placed at the end of <code>arr1</code> in <strong>ascending</strong> order.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
<strong>Output:</strong> [2,2,2,1,4,3,3,9,6,7,19]
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
<strong>Output:</strong> [22,28,8,6,17,44]
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= arr1.length, arr2.length &lt;= 1000</code></li>
	<li><code>0 &lt;= arr1[i], arr2[i] &lt;= 1000</code></li>
	<li>All the elements of <code>arr2</code> are <strong>distinct</strong>.</li>
	<li>Each&nbsp;<code>arr2[i]</code> is in <code>arr1</code>.</li>
</ul>
