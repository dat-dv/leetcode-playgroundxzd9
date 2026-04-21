/* https://leetcode.com/problems/top-k-frequent-elements/ */

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  const data = [];
  for (const [k, v] of map) {
    data.push({ k, v });
  }

  data.sort((a, b) => b.v - a.v);
  return data.slice(0, k).map((item) => item.k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
