import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { askQuestion, TARGET_DIR } from './utils';

async function main() {
  let arg = process.argv[2] || (await askQuestion('❓ Nhập ID bài toán: '));
  if (!arg) {
    console.error('❌ ID trống!');
    process.exit(1);
  }

  const folderPath = path.join(TARGET_DIR, arg);
  if (fs.existsSync(folderPath)) {
    console.error(`❌ Bài toán ${arg} đã tồn tại!`);
    process.exit(1);
  }

  // Fetching logic...
  const allProblems = await (
    await fetch('https://leetcode.com/api/problems/all/')
  ).json();
  const problem = allProblems.stat_status_pairs.find(
    (p: any) => String(p.stat.frontend_question_id) === arg
  );

  if (!problem) {
    console.error('❌ Không tìm thấy bài này!');
    process.exit(1);
  }

  const titleSlug = problem.stat.question__title_slug;
  const detail = (
    await (
      await fetch('https://leetcode.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `query questionData($titleSlug: String!) { question(titleSlug: $titleSlug) { questionFrontendId title titleSlug content difficulty topicTags { name } codeSnippets { langSlug code } } }`,
          variables: { titleSlug },
        }),
      })
    ).json()
  ).data.question;

  fs.mkdirSync(folderPath, { recursive: true });

  fs.writeFileSync(
    path.join(folderPath, 'metadata.json'),
    JSON.stringify(
      {
        id: detail.questionFrontendId,
        title: detail.title,
        difficulty: detail.difficulty,
        tags: detail.topicTags.map((t: any) => t.name),
        link: `https://leetcode.com/problems/${detail.titleSlug}/`,
      },
      null,
      2
    )
  );

  const readmeContent = `# ${detail.questionFrontendId} - ${detail.title}\n\n## 1. Ý tưởng / Lời giải\n\n<!-- Viết idea vào đây -->\n\n## 2. Thông tin bài toán\n\n* **Mức độ:** ${detail.difficulty}\n* **Nguồn:** [LeetCode](https://leetcode.com/problems/${detail.titleSlug}/)\n\n## 3. Mô tả đề bài\n\n${detail.content.replace(/<p>&nbsp;<\/p>/g, '').trim()}\n`;
  fs.writeFileSync(path.join(folderPath, 'readme.md'), readmeContent);

  const snippet = detail.codeSnippets.find(
    (s: any) => s.langSlug === 'typescript'
  ) || { code: '// Viết code...' };
  fs.writeFileSync(
    path.join(folderPath, 'index.ts'),
    `/* https://leetcode.com/problems/${detail.titleSlug}/ */\n\n${snippet.code}\n\n// console.log();\n`
  );

  // --- Tự động tạo issue.md template ---
  const issueTemplatePath = path.join(
    process.cwd(),
    'scripts',
    'templates',
    'issue.md'
  );
  if (fs.existsSync(issueTemplatePath)) {
    let issueTemplate = fs.readFileSync(issueTemplatePath, 'utf8');
    issueTemplate = issueTemplate
      .replace(/{{id}}/g, detail.questionFrontendId)
      .replace(/{{title}}/g, detail.title);
    fs.writeFileSync(path.join(folderPath, 'issue.md'), issueTemplate);
    console.log(`📝 Đã tự động tạo issue.md cho bài ${arg}`);
  }

  try {
    execSync(`npm run fm`, { stdio: 'ignore' });
  } catch (e) {}
  console.log(`✅ Hoàn tất: leetcode/${arg}`);
}

main().catch(console.error);
