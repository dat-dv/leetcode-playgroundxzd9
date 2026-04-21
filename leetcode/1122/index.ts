/* https://leetcode.com/problems/relative-sort-array/ */

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const mapObj = new Map<number, number>();
  arr2.forEach((i) => mapObj.set(i, 0));
  const notPlacedInArr2: number[] = [];
  const r: number[] = [];

  arr1.map((i) => {
    const found = mapObj.has(i);
    if (found) {
      const newValue = mapObj.get(i) + 1;
      mapObj.set(i, newValue);
    } else {
      notPlacedInArr2.push(i);
    }
  });

  notPlacedInArr2.sort((a, b) => a - b);
  mapObj.forEach((value, key) => {
    // mapObj luôn đảm bảo index khi chúng ta insert
    while (value) {
      r.push(key);
      value--;
    }
  });
  notPlacedInArr2.forEach((i) => r.push(i));

  return r;
}

console.log(
  relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])
);
