/* https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/ */

function twoSum(numbers: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i + 1);
  }

  for (let i = 0; i < numbers.length; i++) {
    const val = numbers[i];
    const f = target - val;
    const fPosition = map.get(f);
    if (fPosition !== undefined) {
      return [i + 1, fPosition];
    }
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
