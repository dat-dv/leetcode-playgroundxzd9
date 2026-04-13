/* https://leetcode.com/problems/power-of-three/ */

function isPowerOfThree(n: number): boolean {
  if (n === 1) return true;
  if (n < 3) return false;
  return isPowerOfThree(n / 3);
}

console.log(isPowerOfThree(27));
