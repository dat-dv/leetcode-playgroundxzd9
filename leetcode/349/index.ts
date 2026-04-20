/* https://leetcode.com/problems/intersection-of-two-arrays/ */

function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const result = [];
  nums2.forEach((i) => {
    if (set1.has(i)) {
      result.push(i);
      set1.delete(i);
    }
  });
  return result;
}

const nums1 = [1, 2, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10];
const nums2 = [2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(intersection(nums1, nums2));
