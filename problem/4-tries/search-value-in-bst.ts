import TreeNode from './utils/tree-node';
import TreePrinter from './utils/printer';

const initBST = () => {
  const root = new TreeNode(83);
  const node3 = new TreeNode(32);
  const node10 = new TreeNode(1120);
  const node1 = new TreeNode(11);
  const node6 = new TreeNode(622);
  const node14 = new TreeNode(114);
  const node4 = new TreeNode(421);
  const node7 = new TreeNode(127);
  const node0 = new TreeNode(5);
  const node2 = new TreeNode(25);
  const node13 = new TreeNode(105);
  const node15 = new TreeNode(150);
  const node4_left = new TreeNode(400);
  const node7_right = new TreeNode(130);
  const node_0_left = new TreeNode(1);
  const node_0_right = new TreeNode(9);
  const node_2_right = new TreeNode(29);
  const node_13_left = new TreeNode(99);
  const node_400_left = new TreeNode(350);
  const node_400_right = new TreeNode(410);
  const node_130_left = new TreeNode(128);
  const node_350_left = new TreeNode(310);

  root.left = node3;
  root.right = node10;

  node3.left = node1;
  node3.right = node6;

  node10.left = null;
  node10.right = node14;

  node6.left = node4;
  node6.right = node7;

  node1.left = node0;
  node1.right = node2;

  node14.left = node13;
  node14.right = node15;

  node4.left = node4_left;
  node7.right = node7_right;

  node0.left = node_0_left;
  node0.right = node_0_right;
  node2.right = node_2_right;
  node13.left = node_13_left;

  node4_left.left = node_400_left;
  node4_left.right = node_400_right;

  node7_right.left = node_130_left;
  node_400_left.left = node_350_left;

  return root;
};

const root = initBST();
TreePrinter.print(root, 'search-value-in-bst');
