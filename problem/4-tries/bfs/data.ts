class TreeNode {
  value: string;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: string) {
    this.value = value;
  }
}

const A = new TreeNode('A');
const B = new TreeNode('B');
const C = new TreeNode('C');
const D = new TreeNode('D');
const E = new TreeNode('E');
const F = new TreeNode('F');
const G = new TreeNode('G');
const H = new TreeNode('H');
const I = new TreeNode('I');
const J = new TreeNode('J');
const K = new TreeNode('K');
const L = new TreeNode('L');
const M = new TreeNode('M');
const N = new TreeNode('N');
const O = new TreeNode('O');

A.left = B;
A.right = C;

B.left = D;
B.right = E;

C.left = F;
C.right = G;

D.left = H;
D.right = I;

E.left = J;
E.right = K;

F.left = L;
F.right = M;

G.left = N;
G.right = O;

export default A;
