/* https://leetcode.com/problems/container-with-most-water/ */

function maxArea(height: number[]): number {
  let l = 0;
  let r = 0;
  let m = 0;
  while (l < r) {
    const lv = height[l];
    const rv = height[r];
    m = Math.max(m, Math.min(lv, rv) * (r - l));
    if (lv < rv) {
      l++;
    } else {
      r--;
    }
  }
  return m;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
