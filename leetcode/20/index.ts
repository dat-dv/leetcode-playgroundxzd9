/* https://leetcode.com/problems/valid-parentheses/ */

function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    const lastItem = stack.at(-1);
    if (lastItem && obj[lastItem] === item) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  for (let i = 0; i < stack.length / 2; i++) {
    const isValid = obj[stack[i]] === stack[stack.length - 1 - i];
    if (!isValid) return false;
  }

  return true;
}

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
