/* https://leetcode.com/problems/contains-duplicate/ */

function containsDuplicate(nums: number[]): boolean {
  const obj = new Set();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (obj.has(val)) {
      return true;
    }
    obj.add(val);
  }
  return false;
}

const test = [
  [1, 2, 3, 1],
  [1, 2, 3, 4],
  [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
];

test.forEach((item) => {
  console.log(containsDuplicate(item));
});
