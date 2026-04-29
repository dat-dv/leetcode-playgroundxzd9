export default class TreeNode {
  data: string;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(data: string) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
