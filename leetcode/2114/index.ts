/* https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/ */

function mostWordsFound(sentences: string[]): number {
  let result = 0;
  for (let i = 0; i < sentences.length; i++) {
    result = Math.max(result, sentences[i].split(' ').length);
  }
  return result;
}

console.log(
  mostWordsFound([
    'alice and bob are doing their homework',
    'alice and bob are doing their homework',
    'alice and bob are doing their homework',
  ])
);
// console.log();
