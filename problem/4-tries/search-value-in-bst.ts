import TreeNode from './utils/tree-node';
import TreePrinter from './utils/printer';

const initBST = () => {
  // Định nghĩa các Node theo thứ tự tăng dần (giúp dễ hình dung)
  const n1 = new TreeNode(1);
  const n5 = new TreeNode(5);
  const n9 = new TreeNode(9);
  const n11 = new TreeNode(11);
  const n25 = new TreeNode(25);
  const n29 = new TreeNode(29);
  const n32 = new TreeNode(32);
  const n83 = new TreeNode(83);
  const n99 = new TreeNode(99);
  const n105 = new TreeNode(105);
  const n114 = new TreeNode(114);
  const n127 = new TreeNode(127);
  const n128 = new TreeNode(128);
  const n130 = new TreeNode(130);
  const n150 = new TreeNode(150);
  const n310 = new TreeNode(310);
  const n350 = new TreeNode(350);
  const n400 = new TreeNode(400);
  const n410 = new TreeNode(410);
  const n421 = new TreeNode(421);
  const n622 = new TreeNode(622);
  const n1120 = new TreeNode(1120);

  const root = n350;

  // 1. Nhánh trái của Root (Các giá trị < 350)
  root.left = n32;

  n32.left = n11;
  n32.right = n128;

  n11.left = n5;
  n11.right = n25;

  n5.left = n1;
  n5.right = n9;
  n25.right = n29;

  n128.left = n127;
  n128.right = n130;

  n127.left = n105;

  n105.left = n99;
  n105.right = n114;

  n99.left = n83;

  n130.right = n310;
  n310.left = n150;

  // 2. Nhánh phải của Root (Các giá trị > 350)
  root.right = n400;

  n400.right = n622;

  n622.left = n421;
  n622.right = n1120;

  n421.left = n410;

  return root;
};

const root = initBST();
TreePrinter.print(root, 'search-value-in-bst');
