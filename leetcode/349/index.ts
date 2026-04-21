/* https://leetcode.com/problems/intersection-of-two-arrays/ */

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set1 = new Set(nums1);
  const result: number[] = [];

  nums2.forEach((num) => {
    if (set1.has(num)) {
      result.push(num);
      set1.delete(num);
    }
  });

  return result;
};

const n1 = [1, 2, 2, 1, 3, 4, 5, 6, 7, 8, 9, 10];
const n2 = [2, 2];
console.log(intersection(n1, n2));
