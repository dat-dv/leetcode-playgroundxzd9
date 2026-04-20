/* https://leetcode.com/problems/missing-number/ */

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const totalSum = (n * (n + 1)) / 2;
  const totalInNums = nums.reduce((i, cur) => i + cur, 0);
  return totalSum - totalInNums;
}

const test = [
  [3, 0, 1],
  [0, 1],
  [9, 6, 4, 2, 3, 5, 7, 0, 1],
];

test.forEach((item) => {
  console.log(missingNumber(item));
});
