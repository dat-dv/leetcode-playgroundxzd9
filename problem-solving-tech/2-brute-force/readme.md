# 🔨 2 - Brute Force (Vét cạn)

Thuật toán Brute Force là thuật toán vét cạn, có nghĩa là thay vì giải thuật toán bởi các tối ưu hơn, nó sẽ giải bằng cách thử tất cả các trường hợp có thể xảy ra cho đến khi tìm được đáp án đúng.

## 💡 Ý tưởng cốt lõi

Đây là cách tiếp cận "ngây thơ" và trực quan nhất. Bạn dùng sức mạnh tính toán để duyệt hết mọi khả năng mà không cần dùng đến các thuật toán tối ưu phức tạp.

- **Thử và Sai:** Thử từng cái một cho đến khi trúng.
- **Không bỏ sót:** Đảm bảo tìm ra kết quả nếu nó tồn tại.

## 🎨 Ví dụ minh họa

**Bài toán:** Bạn quên mật khẩu vali có 3 chữ số.

- **Brute Force:** Bạn thử từ `000`, `001`, `002`... cho tới `999`.
- Chắc chắn bạn sẽ mở được vali, nhưng sẽ mất thời gian nếu mật khẩu là `999`.

## 📝 Quy tắc ghi nhớ

> "Brute Force là điểm xuất phát. Nếu nó chạy quá chậm, đó là lúc bạn cần Sliding Window, Binary Search hoặc Dynamic Programming."
