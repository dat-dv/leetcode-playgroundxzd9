function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // 1. Math.floor đảm bảo mid là số nguyên để làm index.
    // 2. Nó có xu hướng dịch về bên trái (vd: 0.5 -> 0), giúp hội tụ phạm vi.
    const mid = Math.floor(left + (right - left) / 2);
    const mv = nums[mid];

    if (mv === target) return mid;

    if (mv > target) {
      // Vì nums[mid] đã kiểm tra và lớn hơn target, ta bỏ qua mid bằng cách -1.
      right = mid - 1;
    } else {
      // Vì nums[mid] nhỏ hơn target, ta bỏ qua mid bằng cách +1.
      // Điều này cũng giúp tránh vòng lặp vô tận khi left và right cạnh nhau.
      left = mid + 1;
    }
  }

  return -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
