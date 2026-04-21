import fs from 'fs';
import path from 'path';
import readline from 'readline';

const TARGET_DIR = path.join(process.cwd(), 'leetcode');

async function askQuestion(query: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans.trim());
    })
  );
}

async function fetchAllProblems() {
  const res = await fetch('https://leetcode.com/api/problems/all/');
  const data = await res.json();
  return data.stat_status_pairs;
}

async function fetchGraphQLData(titleSlug: string) {
  const query = `
    query questionData($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionFrontendId
        title
        titleSlug
        content
        difficulty
        topicTags { name }
        codeSnippets { langSlug code }
      }
    }
  `;

  const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { titleSlug } }),
  });
  const data = await res.json();
  return data.data.question;
}

function getTemplateCode(
  snippets: any[],
  targetLangs = ['typescript', 'javascript']
) {
  for (const lang of targetLangs) {
    const snippet = snippets.find((s: any) => s.langSlug === lang);
    if (snippet) return snippet.code;
  }
  return '';
}

async function main() {
  let arg = process.argv[2];

  if (!arg) {
    arg = await askQuestion('❓ Nhập ID bài toán bạn muốn khởi tạo: ');
  }

  if (!arg) {
    console.error('❌ ID không được để trống!');
    process.exit(1);
  }

  const folderPath = path.join(TARGET_DIR, arg);
  if (fs.existsSync(folderPath)) {
    console.error(
      `❌ Lỗi: Bài toán ${arg} đã tồn tại! Vui lòng kiểm tra thư mục leetcode/${arg}.`
    );
    process.exit(1);
  }

  console.log(`⏳ Đang dò tìm thông tin cho bài toán số ${arg}...`);
  const allProblems = await fetchAllProblems();
  const problem = allProblems.find(
    (p: any) => String(p.stat.frontend_question_id) === arg
  );

  if (!problem) {
    console.error('❌ Không tìm thấy bài toán này!');
    process.exit(1);
  }

  const titleSlug = problem.stat.question__title_slug;
  console.log(`🔗 Tìm thấy slug: ${titleSlug}. Đang lấy dữ liệu chi tiết...`);

  const detail = await fetchGraphQLData(titleSlug);
  if (!detail) {
    console.error('❌ Lỗi khi tải dữ liệu chi tiết từ LeetCode!');
    process.exit(1);
  }

  const folderPath = path.join(TARGET_DIR, arg);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  // 1. Tạo file metadata.json
  const metadata = {
    id: detail.questionFrontendId,
    title: detail.title,
    difficulty: detail.difficulty,
    tags: detail.topicTags ? detail.topicTags.map((t: any) => t.name) : [],
    link: `https://leetcode.com/problems/${detail.titleSlug}/`,
  };
  fs.writeFileSync(
    path.join(folderPath, 'metadata.json'),
    JSON.stringify(metadata, null, 2)
  );

  // 2. Tạo file readme.md
  // Gỡ bỏ tag HTML thừa nếu có thể, hoặc giữ nguyên HTML nhưng ném vào markdown
  const cleanContent = detail.content
    ? detail.content.replace(/<p>&nbsp;<\/p>/g, '').trim()
    : 'Chưa có mô tả bài toán.';

  const tagsStr = metadata.tags.length > 0 ? metadata.tags.join(', ') : 'N/A';

  const readmeContent = `# ${metadata.id} - ${metadata.title}

## 1. Ý tưởng / Lời giải

<!-- Viết cách giải thích, approach hoặc notes của bạn vào đây -->

## 2. Thông tin bài toán

* **Mức độ:** ${metadata.difficulty}
* **Chủ đề:** ${tagsStr}
* **Nguồn bài:** [LeetCode](${metadata.link})

## 3. Mô tả đề bài

${cleanContent}
`;
  const readmeTargetPath = path.join(folderPath, 'readme.md');
  if (!fs.existsSync(readmeTargetPath)) {
    fs.writeFileSync(readmeTargetPath, readmeContent);
  } else {
    console.log(
      `⚠️  File readme.md đã tồn tại tại leetcode/${arg}. Bỏ qua việc tạo đè để bảo toàn ghi chú của bạn.`
    );
  }

  // 3. Tạo file index.ts
  const indexPath = path.join(folderPath, 'index.ts');
  if (!fs.existsSync(indexPath)) {
    const codeStub = getTemplateCode(detail.codeSnippets);
    const codeContent = codeStub || '// Viết code của bạn ở đây...';
    // Append auto export and test logic scaffolding if needed
    const finalCode = `/* ${metadata.link} */\n\n${codeContent}\n\n// console.log(yourFunction());\n`;
    fs.writeFileSync(indexPath, finalCode);
  }

  // 4. Format lại toàn bộ dư án (đảm bảo file mardown / json / ts đều ăn chuẩn)
  try {
    const { execSync } = require('child_process');
    execSync(`npm run fm`, { stdio: 'ignore' });
  } catch (err) {
    // Không có script fm thì bỏ qua
  }

  console.log(
    `✅ Đã tải, khởi tạo và format hoàn tất tại thư mục: leetcode/${arg}`
  );
}

main().catch(console.error);
