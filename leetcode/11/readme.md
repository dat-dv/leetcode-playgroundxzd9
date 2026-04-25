# 11 - Container With Most Water

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Ý tưởng của bài này
  - Giả sử tại vị trí left và right -> tính area = (r-l) \* Math.min(height[l], height[r])
    - Tưởng tượng tại l =0 l r = 10 -> area = 10 \* Math.min(height[0], height[10])
    - Giả sử tại h[0] = 1 , h[10] = 10; -> area = 10 \* 1 = 10;
    - Tưởng tượng tiếp vậy nếu h[0] = 1 , h[9] = 100 -> area = 9 \* 100 = 900;
      - Tức là nên dịch chuyển con trỏ r để tính tiếp có khả năng sẽ tính được
    - Giả sử tại h[0] = 10, và h[10] = 1 -> area = 1 _ (r - l) = 1 _ 10 = 10;
      - Tức là cho dù ta có di chuyển right về bên trái -> thì s = 1 \* (r-1 - l) sẽ nhỏ hơn
      - vậy k nên di chuyển r mà nên tăng l;
      - vậy khi di chuyển l thì có nên reset right k ?
        - vì hiện tại trường hợp r > l mà với h[10] = 9 nhưng nếu h[11] = 1; move về lại từ đầu coi như k có ý nghĩa

## 2. Thông tin bài toán

- **Mức độ:** Medium
- **Nguồn:** [LeetCode](https://leetcode.com/problems/container-with-most-water/)

## 3. Mô tả đề bài

<p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>

<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>

<p>Return <em>the maximum amount of water a container can store</em>.</p>

<p><strong>Notice</strong> that you may not slant the container.</p>

<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" />
<pre>
<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> height = [1,1]
<strong>Output:</strong> 1
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == height.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>
</ul>
