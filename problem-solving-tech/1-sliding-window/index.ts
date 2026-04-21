/* https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

function lengthOfLongestSubstring(s: string): number {
  let longgest = 0;
  let left = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[left]) {
      longgest = Math.max(longgest, i - left + 1);
    } else {
      left = i;
    }
  }

  return longgest;
}

const test = ['abcabcbb', 'bbbbb', 'pwwkew'];

test.forEach((item) => {
  console.log(lengthOfLongestSubstring(item));
});
