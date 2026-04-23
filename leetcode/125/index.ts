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

function isPalindrome2(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  const regexp = new RegExp('[A-Za-z0-9]');
  while (left < right) {
    const lval = s[left];
    const validLeft = regexp.test(lval);
    if (!validLeft) {
      left++;
    }
    const rval = s[right];
    const validRight = regexp.test(rval);
    if (!validRight) {
      right--;
    }

    if (validRight && validLeft) {
      if (lval.toLowerCase() !== rval.toLowerCase()) return false;
      left++;
      right--;
    }
  }
  return true;
}

console.log(isPalindrome2('race a car'));
