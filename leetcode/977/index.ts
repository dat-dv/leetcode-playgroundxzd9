/* https://leetcode.com/problems/squares-of-a-sorted-array/ */

function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length);
  let left = 0;
  let right = result.length - 1;
  let currentIndex = result.length - 1;
  while (currentIndex >= 0) {
    const lVal = nums[left] ** 2;
    const rVal = nums[right] ** 2;
    if (lVal > rVal) {
      result[currentIndex] = lVal;
      left++;
    } else {
      result[currentIndex] = rVal;
      right--;
    }
    currentIndex--;
  }

  return result;
}

const test = [
  [-4, -1, 0, 3, 10],
  [-7, -3, 2, 3, 11],
];

test.forEach((item) => {
  console.log(sortedSquares(item));
});
