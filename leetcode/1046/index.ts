/* https://leetcode.com/problems/last-stone-weight/ */

function lastStoneWeight(stones: number[]): number {
  function findXY(stones: number[]) {
    let x;
    let y;
    let ix;
    let iy;
    for (let i = 0; i < stones.length; i++) {
      const v = stones[i];
      if (y === undefined) {
        y = v;
        iy = i;
      } else if (y && x == undefined) {
        if (v > y) {
          x = y;
          ix = iy;
          y = v;
          iy = i;
        } else {
          x = v;
          ix = i;
        }
      } else if (x !== undefined && y !== undefined) {
        if (v > y) {
          x = y;
          ix = iy;
          y = v;
          iy = i;
        } else if (v > x) {
          x = v;
          ix = i;
        }
      }
    }

    return { x, y, ix, iy };
  }

  while (stones.length > 1) {
    const { x, y, ix, iy } = findXY(stones);
    const minus = y - x;
    if (minus === 0) {
      if (iy > ix) {
        stones.splice(iy, 1);
        stones.splice(ix, 1);
      } else {
        stones.splice(ix, 1);
        stones.splice(iy, 1);
      }
    } else {
      stones[iy] = minus;
      stones.splice(ix, 1);
    }
  }

  return stones[0] || 0;
}
// console.log();
