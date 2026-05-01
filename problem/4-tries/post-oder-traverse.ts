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

const traverse = (node: TreeNode) => {
  const postOrderOutput: string[] = [];
  const excute = (node: TreeNode) => {
    if (node == null) return;
    excute(node.left);
    excute(node.right);
    postOrderOutput.push(node.data);
  };

  excute(node);
  console.log('Post-order Tree: ', postOrderOutput.join(' -> '));

  return postOrderOutput;
};

traverse(root);
