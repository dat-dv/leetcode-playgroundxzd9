/* https://leetcode.com/problems/sorting-the-sentence/ */

function sortSentence(s: string): string {
  const arr = [];
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    const val = s[i];
    if (left === undefined && val !== ' ') {
      left = i;
    }
    if (Number(val)) {
      arr[Number(val) - 1] = s.slice(left, i);
      left = undefined;
    }
  }

  return arr.join(' ');
}

console.log(sortSentence('is2 Sentence4 This1 a3'));
