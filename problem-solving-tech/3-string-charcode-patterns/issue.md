# String & CharCode (ASCII/Unicode Number)

### 🎯 1. WHAT & WHY (Bản chất & Tại sao)

- **Bản chất:** CharCode là giá trị số nguyên đại diện cho một ký tự dựa trên bảng mã (UTF-16). Máy tính không hiểu chữ cái, nó chỉ hiểu những con số này.
- **Tại sao là "chìa khóa"?** Vì nó cho phép ta thực hiện **toán học trên ký tự**. Thay vì xử lý chuỗi trừu tượng, ta xử lý các con số, giúp tối ưu hóa hiệu suất và bộ nhớ vượt trội so với việc dùng `Map` hay `Regex`.

### 💡 2. THE INSIGHT (Điểm mấu chốt)

- **Aha! moment:** Khoảng cách giữa các ký tự trong bảng mã là **cố định và liên tục**.
- Ví dụ: `'b'.charCodeAt(0) - 'a'.charCodeAt(0)` luôn luôn bằng `1`.
- **Insight tối ưu:** Ta có thể biến một ký tự thành một **chỉ số mảng (index)** cực nhanh bằng công thức: `index = charCode - baseCode`. Đây chính là nền tảng của kỹ thuật **Frequency Array**.

### 🛠️ 3. HOW & EDGE CASES (Triển khai & Lưu ý)

- **Các bước triển khai:**
  1. Xác định "gốc" (base): Thường là `'a'.charCodeAt(0)` (97).
  2. Lấy mã ký tự hiện tại: `s.charCodeAt(i)`.
  3. Tính toán hoặc lưu trữ vào mảng: `count[code - base]++`.
- **"Bẫy" (Edge Cases) cần tránh:**
  - **Unicode mở rộng:** Các ký tự đặc biệt hoặc Emoji có mã vượt quá 16-bit, cần dùng `codePointAt()` thay vì `charCodeAt()`.
  - **Magic Numbers:** Luôn dùng `'a'.charCodeAt(0)` thay vì viết cứng số `97` để code dễ bảo trì.
  - **Case Sensitivity:** Phân biệt rõ mã chữ hoa (`65-90`) và chữ thường (`97-122`).

### 📝 4. NOTE

- Sử dụng mảng cố định `new Array(26).fill(0)` luôn nhanh hơn và tốn ít bộ nhớ hơn `new Map()` trong các bài toán về anagram hoặc tần suất ký tự đơn giản.

### 🔗 5. REFERENCE

- [MDN: String.prototype.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [LeetCode 49: Group Anagrams (Ví dụ điển hình)](../../leetcode/49/index.ts)
