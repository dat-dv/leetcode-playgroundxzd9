# 155 - Min Stack

## 1. Ý tưởng / Lời giải

<!-- Viết idea vào đây -->

- Ý tưởng là dùng array làm stack để lưu trữ data đầu vào
  - Nhưng mà trong MinStack lại có hàm getMin -> tìm ra element nhỏ nhất trong stack
  - Nếu tiếp cận như lúc đầu -> getMin có độ phức tạp là O(n)
  - Để tối ưu -> ta nhận thấy :
    - Mỗi lần push vào ta sẽ xác định được thằng nào min
    - Nhưng khi pop ra thì ta sẽ không thể biết được thằng nào min tiếp theo
    - Vậy cách này vẫn chưa được :
      - Cuối cùng ta nghĩ ra cách lưu thêm 1 array (minStack)
      - Khi push vào -> nó sẽ so sánh với phần tử cuối cùng của minStack
        - Nếu như lớn hơn thì ta tiếp tục push vào 1 phần tử nữa (giống với phần tử cuối cùng)
        - Nếu như nhỏ hơn thì ta push nó vào luôn
      - Khi pop ra -> pop đồng thời cả 2 stack.
      - Độ phức tạp của các hàm : O(1)
      - Lí giải : chúng ta sẽ luôn luôn giữ được cho item ở cuối cùng của minStack là min Value => Mỗi khi pop => Chỉ pop phần tử min fake ( cần pop bao nhiêu lần thì mới xoá được min Value đó)

## 2. Thông tin bài toán

- **Mức độ:** Medium
- **Nguồn:** [LeetCode](https://leetcode.com/problems/min-stack/)

## 3. Mô tả đề bài

<p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p>

<p>Implement the <code>MinStack</code> class:</p>

<ul>
	<li><code>MinStack()</code> initializes the stack object.</li>
	<li><code>void push(int val)</code> pushes the element <code>val</code> onto the stack.</li>
	<li><code>void pop()</code> removes the element on the top of the stack.</li>
	<li><code>int top()</code> gets the top element of the stack.</li>
	<li><code>int getMin()</code> retrieves the minimum element in the stack.</li>
</ul>

<p>You must implement a solution with <code>O(1)</code> time complexity for each function.</p>

<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input</strong>
[&quot;MinStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;getMin&quot;,&quot;pop&quot;,&quot;top&quot;,&quot;getMin&quot;]
[[],[-2],[0],[-3],[],[],[],[]]

<strong>Output</strong>
[null,null,null,null,-3,null,0,-2]

<strong>Explanation</strong>
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
</pre>

<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-2<sup>31</sup> &lt;= val &lt;= 2<sup>31</sup> - 1</code></li>
	<li>Methods <code>pop</code>, <code>top</code> and <code>getMin</code> operations will always be called on <strong>non-empty</strong> stacks.</li>
	<li>At most <code>3 * 10<sup>4</sup></code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>getMin</code>.</li>
</ul>
