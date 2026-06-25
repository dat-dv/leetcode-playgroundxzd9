import A from './data';

function searchDFS(node: TreeNode | null, target: string): TreeNode | null {
  // 1. Dừng bước nếu đụng ngõ cụt (node null)
  if (!node) return null;

  // 2. Chộp ngay nếu tìm thấy ở Node hiện tại (như Preorder là xét Root đầu tiên)
  if (node.value === target) return node;

  // 3. Nếu chưa thấy, sai quân đi lục soát toàn bộ nhánh Trái
  const leftResult = searchDFS(node.left, target);
  if (leftResult) return leftResult; // Nếu nhánh Trái tìm ra thì báo cáo về ngay, khỏi tìm nhánh Phải nữa!

  // 4. Bất lực nhánh Trái rồi thì ráng mò nốt sang nhánh Phải
  return searchDFS(node.right, target);
}

// ==== TEST THỬ ====
console.log('\n ==== TÌM KIẾM DFS ==== ');
const targetNode = searchDFS(A, 'K');
if (targetNode) {
  console.log(`Đã tìm thấy Node: ${targetNode.value}`);
} else {
  console.log('Tìm lòi con mắt không thấy!');
}
