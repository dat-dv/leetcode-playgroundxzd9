/* https://leetcode.com/problems/find-target-indices-after-sorting-array/ */

function targetIndices(nums: number[], target: number): number[] {
  // O(n log n)
  const rs: number[] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) rs.push(i);
    if (nums[i] > target) break;
  }
  return rs;
}

function targetIndices2(nums: number[], target: number): number[] {
  // O(n)
  let countTarget = 0;
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (val === target) countTarget++;
    if (val < target) left++;
  }

  return Array.from({ length: countTarget }, (_, idx) => left + idx);
}

console.log(targetIndices([1, 2, 5, 2, 3], 2));
console.log(targetIndices2([1, 2, 5, 2, 3], 2));
