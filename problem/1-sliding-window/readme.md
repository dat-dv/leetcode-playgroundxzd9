# 🪟 1 - Sliding Window (Cửa sổ trượt)

Kỹ thuật **Sliding Window** là một phương pháp tối ưu hóa cực kỳ mạnh mẽ để xử lý các bài toán trên **Mảng (Array)** hoặc **Chuỗi (String)**, đặc biệt là khi làm việc với các dãy con liên tiếp (subarrays/substrings).

## 💡 Ý tưởng cốt lõi

Thay vì sử dụng các vòng lặp lồng nhau (Brute Force) gây ra độ phức tạp $O(n^2)$, chúng ta duy trì một "cửa sổ" và trượt nó dọc theo dãy dữ liệu. Khi cửa sổ di chuyển, chúng ta chỉ cập nhật các phần tử mới vào và phần tử cũ ra khỏi cửa sổ, giúp đưa độ phức tạp về **$O(n)$**.

> **Nguyên tắc:**
>
> - **Mở rộng:** Di chuyển con trỏ bên phải (`Right`) để thêm phần tử vào cửa sổ.
> - **Thu hẹp:** Di chuyển con trỏ bên trái (`Left`) để loại bỏ phần tử khi điều kiện không còn thỏa mãn.

## 🎨 Minh họa hình ảnh

Giả sử tìm subarray có cùng giá trị dài nhất trong mảng: `[1, 1, 2, 2, 2, 3]`

```text
Bước 1: [1] 1 2 2 2 3  -> L=0, R=0, Max=1
Bước 2: [1 1] 2 2 2 3  -> L=0, R=1, Max=2
Bước 3: 1 1 [2] 2 2 3  -> R gặp '2' khác '1' -> Nhảy L tới R (L=2, R=2), Max=2
Bước 4: 1 1 [2 2] 2 3  -> L=2, R=3, Max=2
Bước 5: 1 1 [2 2 2] 3  -> L=2, R=4, Max=3 (Kết quả)
```

## 🛠 Giải pháp tối ưu ($O(n)$)

### Cách 1: Sử dụng cấu trúc `while` (Tiêu chuẩn)

Cách này giúp bạn kiểm soát rõ ràng hai con trỏ `left` và `right`.

```typescript
/**
 * Tìm độ dài subarray dài nhất có các phần tử giống hệt nhau.
 * Độ phức tạp: Time O(n) | Space O(1)
 */
function longestSameValueSubarray(arr: number[]): number {
  let left = 0;
  let right = 0;
  let maxLen = 0;

  while (right < arr.length) {
    // Nếu phần tử hiện tại khác phần tử bắt đầu của cửa sổ
    if (arr[right] !== arr[left]) {
      left = right; // Thu hẹp cửa sổ bằng cách nhảy thẳng tới vị trí mới
    }

    // Cập nhật độ dài lớn nhất: (right - left + 1)
    maxLen = Math.max(maxLen, right - left + 1);
    right++; // Luôn mở rộng cửa sổ về bên phải
  }

  return maxLen;
}
```

### Cách 2: Sử dụng vòng lặp `for` (Gọn nhẹ)

Thường dùng khi bạn chỉ cần so sánh phần tử hiện tại với phần tử ngay trước đó.

```typescript
function longestSameValueSubarray(arr: number[]): number {
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    // Nếu giá trị thay đổi, cập nhật lại điểm bắt đầu của cửa sổ
    if (i > 0 && arr[i] !== arr[i - 1]) {
      start = i;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}
```

---

## 📊 Khi nào nên sử dụng?

Bạn nên nghĩ ngay đến Sliding Window khi gặp các bài toán:

1. Yêu cầu xử lý **dãy con liên tiếp** (Subarray / Substring).
2. Tìm giá trị **Min, Max, Sum, hoặc độ dài dài nhất/ngắn nhất** thỏa mãn điều kiện.
3. Các từ khóa đặc trưng: _Longest substring, Smallest subarray, Maximum sum of size K._

---

## 🎯 Quy tắc ghi nhớ

- **Fix 1 bước (Điều kiện đơn giản):** Sử dụng `if` để kiểm tra.
- **Fix nhiều bước (Điều kiện phức tạp):** Sử dụng `while` để thu hẹp cửa sổ dần dần cho đến khi thỏa mãn.
- **Công thức tính độ dài:** `Right - Left + 1`.
