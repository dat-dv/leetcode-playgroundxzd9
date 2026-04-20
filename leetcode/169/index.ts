/* https://leetcode.com/problems/majority-element/ */

// cach 1;
function majorityElement(nums: number[]): number {
  // mấu chốt phải nhìn ra được việc xuất hiện trọng số (> 1/2 phần tử);
  // ta chỉ cần đếm số lần xuất hiện và triệt tiêu.
  // - nếu count = 0 thì ta sẽ chọn số đó làm majorNumber và tăng số lần xuất hiện nó lên thành 1
  // - nếu count = 0 thì ta cứ + nó và kiểm tra nếu count >1/2 thì dừng hẳn
  // - nếu khác với lần trước thì giảm count đi 1
  let majorNumber = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majorNumber = nums[i];
    }

    if (nums[i] === majorNumber) {
      count++;
    } else {
      count--;
    }
  }

  return majorNumber;
}

// cach 2
function majorityElement1(nums: number[]): number {
  // O(n) time and space
  const obj = new Map();
  let majorityNumber = nums[0];

  nums.forEach((n) => {
    const appearTime = (obj.get(n) || 0) + 1;
    obj.set(n, appearTime);
    const preMajorityNumber = obj.get(majorityNumber) || 0;
    if (appearTime > preMajorityNumber) {
      majorityNumber = n;
    }
  });

  return majorityNumber;
}

const test = [
  [3, 2, 3],
  [2, 2, 1, 1, 1, 2, 2],
];

test.forEach((item) => {
  console.log(majorityElement(item));
  console.log(majorityElement1(item));
});
