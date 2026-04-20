# 217 - Contains Duplicate

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

- Bài này đơn giản, giải bằng cách dùng hash table để lưu trữ các giá trị đã gặp, nếu gặp lại giá trị đã có trong hash table thì trả về true, ngược lại thì trả về false;

- Thắc mắc: Nên dùng Map hay Obj để lưu cái này?
  - Theo mình thì nên sử dụng Object đối với string hơn là số. Vì trong bài toán này obj sẽ tự ép phần số thành string để lưu vào key -> khi so sánh chúng ta so sánh có thể ta phải ép ngược lại.
  - Nếu dùng Map thì sẽ không bị ép kiểu

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Chủ đề:** Array, Hash Table, Sorting
- **Nguồn bài:** [LeetCode](https://leetcode.com/problems/contains-duplicate/)

## 3. Mô tả đề bài

<p>Given an integer array <code>nums</code>, return <code>true</code> if any value appears <strong>at least twice</strong> in the array, and return <code>false</code> if every element is distinct.</p>

<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,1]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The element 1 occurs at the indices 0 and 3.</p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,2,3,4]</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p>All elements are distinct.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">nums = [1,1,1,3,3,4,3,2,4,2]</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
</ul>
