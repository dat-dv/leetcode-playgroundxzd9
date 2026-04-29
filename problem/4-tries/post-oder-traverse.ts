import TreePrinter from './utils/printer';
import TreeNode from './utils/tree-node';

const initTree = () => {
  const root = new TreeNode('R');
  const nodeA = new TreeNode('A');
  const nodeB = new TreeNode('B');
  const nodeC = new TreeNode('C');
  const nodeD = new TreeNode('D');
  const nodeE = new TreeNode('E');
  const nodeF = new TreeNode('F');
  const nodeG = new TreeNode('G');

  root.left = nodeA;
  root.right = nodeB;

  nodeA.left = nodeC;
  nodeA.right = nodeD;

  nodeB.left = nodeE;
  nodeB.right = nodeF;

  nodeF.left = nodeG;

  return root;
};

const root = initTree();
TreePrinter.print(root, 'post-oder-traverse');

class Solution {
  execute(node: TreeNode) {
    const output: string[] = [];
    this.traverse(node, output);
    console.log('Post-order Tree: ', output.join(' -> '));
  }
  traverse(node: TreeNode | null, output: string[]) {
    if (node == null) return;
    this.traverse(node.left, output); // Left
    this.traverse(node.right, output); // Right
    output.push(node.data); // Root
  }
}

const solution = new Solution();

solution.execute(root);
