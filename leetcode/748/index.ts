/* https://leetcode.com/problems/shortest-completing-word/ */

function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const strgrex = /[a-z]/;
  const m = new Map<string, number>();
  let cleanup = '';

  for (let i = 0; i < licensePlate.length; i++) {
    const v = licensePlate[i].toLowerCase();
    if (strgrex.test(v)) {
      cleanup += v;
      m.set(v, (m.get(v) || 0) + 1);
    }
  }

  const result: string[] = [];

  for (const word of words) {
    if (isIncludes(m, word)) {
      result.push(word);
    }
  }

  let minLength = Infinity;
  result.forEach((item, idx) => {
    if (item.length < minLength) {
      minLength = item.length;
    }
  });

  const filteredResult = result.find((item) => item.length === minLength);
  return filteredResult;
}

const isIncludes = (map: Map<string, number>, word: string): boolean => {
  const cloneMap = new Map(map);

  for (let i = 0; i < word.length; i++) {
    const v = word[i].toLowerCase();

    if (cloneMap.has(v)) {
      const count = cloneMap.get(v)!;

      if (count === 1) {
        cloneMap.delete(v);
      } else {
        cloneMap.set(v, count - 1);
      }
    }

    if (cloneMap.size === 0) return true;
  }

  return false;
};

console.log(
  shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
);
