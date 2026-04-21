/* https://leetcode.com/problems/group-anagrams/ */

function groupAnagrams(strs: string[]): string[][] {
  const obj = new Map<string, string[]>();
  for (let i = 0; i < strs.length; i++) {
    const arr = new Array(26).fill(0);
    for (const char of strs[i]) {
      const index = char.charCodeAt(0) - 97;
      arr[index] = arr[index] + 1;
    }
    const key = arr.join('#');
    if (!obj.has(key)) {
      obj.set(key, []);
    }
    obj.get(key).push(strs[i]);
  }
  const result = [];
  for (const item of obj) {
    result.push(item[1]);
  }
  return result;
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
