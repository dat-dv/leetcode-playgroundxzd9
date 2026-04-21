/* https://leetcode.com/problems/nim-game/ */

function canWinNim(n: number): boolean {
  // your turn :
  // mình bốc xong mà còn remain 4 -> 8 - 12 - 16 là mình sẽ thắng
  // bạn bốc xong mà còn 5 6 7 , 9 10 11, 13 14 15 là bạn thua;
  // nhìn vào ta thấy nếu mà đề bài cố tình cho n là bội số của 4 thì mình sẽ thua
  // - vì mình bốc trước nên sẽ luôn chừa lại 1 số lẻ sau đó bạn lại trả về bội số 4
  // - đến lượt cuối cùng bạn bốc sao cho ra 4 là mình thua
  if (n <= 3) return true;
  if (n % 4 === 0) return false;
  return true;
}

console.log(canWinNim(5));
