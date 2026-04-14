/* https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/ */

function smallerNumbersThanCurrent(nums: number[]): number[] {
  const sorted = [...nums].sort((a, b) => a - b);
  const r: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    const idx = sorted.findIndex((v) => v === val);
    // indx = 1 -> có 1  item nhỏ hơn
    // indx = 0 -> có 0  item nhỏ hơn
    // khỏi cần phải cộng trừ thêm;
    r.push(idx);
  }

  return r;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
