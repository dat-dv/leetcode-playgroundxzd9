# 104 - Maximum Depth of Binary Tree

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Vì đề bài là BST chứ không phải Balanced BST nên bắt buộc phải dùng duyệt hết tất cả các node để tìm ra chiều cao của cây
- Bài này còn cách giải DFS, nhưng cách BFS này lại dễ code hơn

| Cách | Ưu điểm                                                                | Nhược điểm                                                  |
| ---- | ---------------------------------------------------------------------- | ----------------------------------------------------------- |
| BFS  | - Duyệt theo level (rất hợp bài level-order, shortest path unweighted) | - Tốn memory nếu tree/graph rất rộng (queue có thể rất lớn) |
|      | - Luôn tìm được đường đi ngắn nhất (graph không trọng số)              | - Chậm hơn DFS nếu chỉ cần duyệt toàn bộ (overhead queue)   |
| DFS  | - Code ngắn, tự nhiên với recursion (tree problems)                    | - Có thể stack overflow nếu cây quá sâu                     |
|      | - Ít memory hơn BFS nếu tree rộng                                      | - Không đảm bảo shortest path                               |
|      | - Phù hợp backtracking (subset, permutation, recursion tree)           | - Khó visualize theo level                                  |

## 2. Thông tin bài toán

- **Mức độ:** Easy
- **Nguồn:** [LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

## 3. Mô tả đề bài

<p>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>

<p>A binary tree&#39;s <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>

<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg" style="width: 400px; height: 277px;" />
<pre>
<strong>Input:</strong> root = [3,9,20,null,null,15,7]
<strong>Output:</strong> 3
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> root = [1,null,2]
<strong>Output:</strong> 2
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
	<li><code>-100 &lt;= Node.val &lt;= 100</code></li>
</ul>
