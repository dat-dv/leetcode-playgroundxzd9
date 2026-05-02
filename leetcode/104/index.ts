/* https://leetcode.com/problems/maximum-depth-of-binary-tree/ */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  let input = root ? [root] : [];
  let result = 0;
  while (input.length) {
    const temp = [];
    for (let i = 0; i < input.length; i++) {
      const node = input[i];
      if (node.left) temp.push(node.left);
      if (node.right) temp.push(node.right);
    }
    input = temp;
    result++;
  }

  return result;
}
// console.log();
