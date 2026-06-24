function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    if (arr[mid] > target) right = mid - 1;
  }

  return -1;
}

const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10];
// => [1,2,3,5] => left 0 right 3 ;
// mid = 1 => giá trị mid = 2 < target => left = mid + 1 = 2; => [3,5]
// 2 3 -> mid = 2 => giá trị mid = 3 => mid < target => left = 3 => right = 3 


const target = 4;
console.log(binarySearch(arr, target));
