import TreeNode from '../tree-node';

export default class TreePrinter {
  static print(root: TreeNode | null) {
    const maxLevel = this.getMaxLevel(root);
    this.printInternal([root], 1, maxLevel);
  }

  private static printInternal(
    nodes: (TreeNode | null)[],
    level: number,
    maxLevel: number
  ) {
    if (!nodes.length || this.isAllNull(nodes)) return;

    const floor = maxLevel - level;
    const edgeLines = Math.pow(2, Math.max(floor - 1, 0));
    const firstSpaces = Math.pow(2, floor) - 1;
    const betweenSpaces = Math.pow(2, floor + 1) - 1;

    this.printSpaces(firstSpaces);

    const newNodes: (TreeNode | null)[] = [];

    for (const node of nodes) {
      if (node) {
        process.stdout.write(node.data);
        newNodes.push(node.left, node.right);
      } else {
        process.stdout.write(' ');
        newNodes.push(null, null);
      }

      this.printSpaces(betweenSpaces);
    }

    console.log();

    // draw branches
    for (let i = 1; i <= edgeLines; i++) {
      for (const node of nodes) {
        this.printSpaces(firstSpaces - i);

        if (!node) {
          this.printSpaces(edgeLines * 2 + i + 1);
          continue;
        }

        process.stdout.write(node.left ? '/' : ' ');
        this.printSpaces(i * 2 - 1);
        process.stdout.write(node.right ? '\\' : ' ');

        this.printSpaces(edgeLines * 2 - i);
      }
      console.log();
    }

    this.printInternal(newNodes, level + 1, maxLevel);
  }

  private static printSpaces(n: number) {
    process.stdout.write(' '.repeat(Math.max(0, n)));
  }

  private static getMaxLevel(node: TreeNode | null): number {
    if (!node) return 0;
    return (
      1 + Math.max(this.getMaxLevel(node.left), this.getMaxLevel(node.right))
    );
  }

  private static isAllNull(list: (TreeNode | null)[]) {
    return list.every((n) => n === null);
  }
}
