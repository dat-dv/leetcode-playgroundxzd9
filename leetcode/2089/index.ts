/* https://leetcode.com/problems/find-target-indices-after-sorting-array/ */

function targetIndices(nums: number[], target: number): number[] {
  const rs: number[] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) rs.push(i);
    if (nums[i] > target) break;
  }
  return rs;
}

console.log(targetIndices([1, 2, 5, 2, 3], 2));
