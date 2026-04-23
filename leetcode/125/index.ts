/* https://leetcode.com/problems/valid-palindrome/ */

function isPalindrome(s: string): boolean {
  let s1 = '';
  const strReg = new RegExp('[A-Za-z0-9]');
  for (let i = 0; i < s.length; i++) {
    if (strReg.test(s[i])) {
      s1 += s[i].toLowerCase();
    }
  }

  for (let i = 0; i < Math.floor(s1.length / 2); i++) {
    if (s1[i] !== s1[s1.length - i - 1]) return false;
  }

  return true;
}

// console.log();
