import A from './data';

//  ========  preorder  ========
function preorder(node: TreeNode | null, arr: string[] = []): void {
  if (!node) return;

  arr.push(node.value);

  preorder(node.left, arr);
  preorder(node.right, arr);

  return arr;
}
//  ========  inorder  ========

function inorder(node: TreeNode | null, arr: string[] = []): void {
  if (!node) return;

  inorder(node.left, arr);

  arr.push(node.value);

  inorder(node.right, arr);

  return arr;
}

//  ========  postorder  ========

function postorder(node: TreeNode | null, arr: string[] = []): void {
  if (!node) return;

  postorder(node.left, arr);
  postorder(node.right, arr);

  arr.push(node.value);

  return arr;
}

//  ========  output  ========

console.log('\n ==== preorder ==== ');
console.log(preorder(A).join(' -> '));
console.log('\n ==== inorder ==== ');
console.log(inorder(A).join(' -> '));
console.log('\n ==== postorder ==== ');
console.log(postorder(A).join(' -> '));

console.log(
  [
    '                A',
    '           /         \\',
    '          B           C',
    '        /   \\       /   \\',
    '       D     E     F     G',
    '      / \\   / \\   / \\   / \\',
    '     H  I  J  K  L  M  N  O',
  ].join('\n')
);
