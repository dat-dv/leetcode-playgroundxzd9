/* https://leetcode.com/problems/longest-palindrome/ */

function longestPalindrome1(s: string): number {
  const arr = Array.from({ length: 52 }, () => 0);

  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    const code = v.charCodeAt(0);
    const idx = code >= 97 ? code - 97 : code - 65 + 26;
    //a-z index 0 -> 25 | A-Z index 26-52
    arr[idx] = arr[idx] + 1;
  }
  let count = 0;
  arr.forEach((i) => {
    const v = Math.floor(i / 2);
    if (v) {
      count += v * 2;
    }
  });
  return s.length > count ? count + 1 : count;
}

function longestPalindrome(s: string): number {
  const m = new Map();

  for (let i = 0; i < s.length; i++) {
    const v = s[i];
    if (m.has(v)) {
      m.set(v, m.get(v) + 1);
    } else {
      m.set(v, 1);
    }
  }
  let result = 0;
  m.forEach((values) => {
    const v = Math.floor(values / 2);
    if (v) {
      result += v * 2;
    }
  });

  return s.length > result ? result + 1 : result;
}

console.log(longestPalindrome('abccccdd'));
