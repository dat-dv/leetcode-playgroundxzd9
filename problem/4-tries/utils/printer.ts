import TreeNode from '../tree-node';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

export default class TreePrinter {
  static print(root: TreeNode | null, outputName?: string) {
    if (!root) {
      console.log('Empty tree');
      return;
    }

    // Tự động xác định thư mục của file gọi hàm (dựa vào process.argv[1])
    const callerFile = process.argv[1] ? path.resolve(process.argv[1]) : '';
    const callerDir = callerFile ? path.dirname(callerFile) : process.cwd();

    let fileName = outputName || 'tree.html';
    if (!fileName.endsWith('.html')) {
      fileName += '.html';
    }

    const filePath = path.join(callerDir, fileName);

    // Chỉ xuất SVG, truyền đường dẫn cần lưu xuống
    this.exportSVG(root, filePath);
  }

  static printConsole(root: TreeNode | null) {
    if (!root) {
      console.log('Empty tree');
      return;
    }

    const _print = (
      node: TreeNode,
      prefix: string,
      isTail: boolean,
      isLeft: boolean,
      isRoot: boolean
    ) => {
      // Hỗ trợ cả node.val (LeetCode) và node.data (Custom)
      const value =
        'val' in node && (node as any).val !== undefined
          ? (node as any).val
          : (node as any).data;

      if (isRoot) {
        console.log(value);
      } else {
        const branch = isTail ? '└── ' : '├── ';
        const side = isLeft ? 'L: ' : 'R: ';
        console.log(`${prefix}${branch}${side}${value}`);
      }

      const nextPrefix = prefix + (isRoot ? '' : isTail ? '    ' : '│   ');

      // Nếu có ít nhất 1 node con thì in ra
      if (node.left || node.right) {
        // In nhánh Left
        if (node.left) {
          _print(node.left, nextPrefix, node.right === null, true, false);
        } else {
          console.log(
            `${nextPrefix}${node.right === null ? '└── ' : '├── '}L: null`
          );
        }

        // In nhánh Right
        if (node.right) {
          _print(node.right, nextPrefix, true, false, false);
        } else {
          console.log(`${nextPrefix}└── R: null`);
        }
      }
    };

    _print(root, '', true, true, true);
  }

  private static exportSVG(root: TreeNode | null, filePath: string) {
    if (!root) return;

    interface NodeInfo {
      node: TreeNode;
      x: number;
      y: number;
    }

    let currentIndex = 0;
    const nodes: NodeInfo[] = [];
    const nodeMap = new Map<TreeNode, NodeInfo>();
    let maxLevel = 0;

    // Duyệt In-Order để lấy toạ độ X chuẩn, giúp cây siêu gọn
    function traverse(node: TreeNode | null, level: number) {
      if (!node) return;
      traverse(node.left, level + 1);

      const info = { node, x: currentIndex++, y: level };
      nodes.push(info);
      nodeMap.set(node, info);
      if (level > maxLevel) maxLevel = level;

      traverse(node.right, level + 1);
    }

    traverse(root, 0);

    const H_SPACING = 60; // Khoảng cách ngang giữa 2 node kề nhau (pixels)
    const V_SPACING = 80; // Khoảng cách dọc giữa các tầng (pixels)

    const width = currentIndex * H_SPACING + 100;
    const height = maxLevel * V_SPACING + 100;

    let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">\n`;

    // 1. Vẽ nhánh (lines) trước để đường kẻ nằm dưới các node
    for (const { node, x, y } of nodes) {
      const px = x * H_SPACING + 50;
      const py = y * V_SPACING + 50;

      if (node.left) {
        const childInfo = nodeMap.get(node.left)!;
        const cx = childInfo.x * H_SPACING + 50;
        const cy = childInfo.y * V_SPACING + 50;
        svg += `<line x1="${px}" y1="${py}" x2="${cx}" y2="${cy}" stroke="#a8c7fa" stroke-width="2" />\n`;
      }
      if (node.right) {
        const childInfo = nodeMap.get(node.right)!;
        const cx = childInfo.x * H_SPACING + 50;
        const cy = childInfo.y * V_SPACING + 50;
        svg += `<line x1="${px}" y1="${py}" x2="${cx}" y2="${cy}" stroke="#a8c7fa" stroke-width="2" />\n`;
      }
    }

    // 2. Vẽ Node (circles + text) đè lên trên nhánh
    for (const { node, x, y } of nodes) {
      const px = x * H_SPACING + 50;
      const py = y * V_SPACING + 50;
      svg += `<circle cx="${px}" cy="${py}" r="22" fill="#0d1117" stroke="#a8c7fa" stroke-width="2" />\n`;
      svg += `<text x="${px}" y="${py + 6}" fill="#e6edf3" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle">${node.data}</text>\n`;
    }

    svg += `</svg>`;

    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Tree Visualization</title>
      <style>
        body { margin: 0; padding: 50px; background: #0d1117; }
        .container { width: max-content; margin: 0 auto; }
        svg { background: #0d1117; border-radius: 8px; display: block; }
      </style>
    </head>
    <body>
      <div class="container">
        ${svg}
      </div>
    </body>
    </html>
    `;

    fs.writeFileSync(filePath, html);
    console.log(
      `\n📸 Đã vẽ xong Tree! Click để xem nếu trình duyệt chưa mở: file://${filePath}\n`
    );
  }
}
