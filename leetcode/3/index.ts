/* https://leetcode.com/problems/longest-substring-without-repeating-characters/ */

function lengthOfLongestSubstring(s: string): number {
  const subString = new Set();
  let left = 0;
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    while (subString.has(s[i])) {
      subString.delete(s[left]);
      left++;
    }
    subString.add(s[i]);
    longest = Math.max(longest, i - left + 1);
  }

  return longest;
}

console.log(lengthOfLongestSubstring('pwwkew'));
