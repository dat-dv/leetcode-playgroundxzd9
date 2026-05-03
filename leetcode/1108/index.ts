/* https://leetcode.com/problems/defanging-an-ip-address/ */

function defangIPaddr(address: string): string {
  let result = '';
  for (let i = 0; i < address.length; i++) {
    if (address[i] === '.') {
      result += '[.]';
    } else {
      result += address[i];
    }
  }
  return result;
}
console.log(defangIPaddr('1.1.1.1'));
console.log(defangIPaddr('255.100.50.0'));
