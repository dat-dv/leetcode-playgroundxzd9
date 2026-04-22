/* https://leetcode.com/problems/longest-consecutive-sequence/ */

function longestConsecutive(nums: number[]): number {
  const obj = new Set(nums);
  let result = 0;
  obj.forEach((i) => {
    if (!obj.has(i + 1)) {
      let cur = i;
      while (obj.has(cur)) {
        cur = cur - 1;
      }
      const count = i - cur;
      result = Math.max(result, count);
    }
  });
  return result;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
