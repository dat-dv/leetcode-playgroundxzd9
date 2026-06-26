import A from '../dfs/data';

function bfs(nodes: (TreeNode | null)[], result: unknown[]) {
  const next: (TreeNode | null)[] = [];
  let callBfs = false;
  console.log('level -> ', Math.floor(Math.log2(nodes.length)));
  for (const node of nodes) {
    if (!node) {
      result.push(null);
      continue;
    }
    result.push(node.value);

    if (node.left || node.right) {
      callBfs = true;
    }
    next.push(node.left);
    next.push(node.right);
  }
  if (callBfs) {
    bfs(next, result);
  }
  return result;
}

const r = bfs([A], []);
