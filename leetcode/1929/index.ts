/* https://leetcode.com/problems/concatenation-of-array/ */

function getConcatenation(nums: number[]): number[] {
  const length = nums.length;
  const r = new Array(length * 2);
  for (let i = 0; i < length; i++) {
    const v = nums[i];
    r[length + i] = v;
    r[i] = v;
  }

  return r;
}

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
