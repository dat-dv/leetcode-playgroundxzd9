/* https://leetcode.com/problems/rings-and-rods/ */

function countPoints(rings: string): number {
  const mapData = Array.from({ length: 10 }, () => []);
  let result = 0;
  for (let i = 0; i < rings.length / 2; i++) {
    let l = i * 2;
    let r = l + 1;
    const color = rings[l];
    const idx = rings[r];
    const vals = mapData[idx];
    if (!vals.includes(color)) {
      vals.push(color);
      if (vals.length === 3) {
        result++;
      }
    }
  }

  return result;
}
// console.log();
