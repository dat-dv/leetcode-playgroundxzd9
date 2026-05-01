import { printer } from 'prettier/doc.js';
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
TreePrinter.print(root, 'in-oder-traverse');

const traverse = (node: TreeNode | null) => {
  const inOrderOutput = [];
  const execute = (node: TreeNode | null) => {
    if (node === null) return null;

    execute(node.left, inOrderOutput);
    inOrderOutput.push(node.data);
    execute(node.right, inOrderOutput);
  };

  execute(node);
  return inOrderOutput;
};

const output = traverse(root);
TreePrinter.printConsole(root);
console.log('In-order Traversal: ', output.join(' -> '));
