/* https://leetcode.com/problems/final-value-of-variable-after-performing-operations/ */

function finalValueAfterOperations(operations: string[]): number {
  const m = {
    '--X': -1,
    'X--': -1,
    '++X': 1,
    'X++': 1,
  };
  return operations.reduce((pre, cur) => {
    return pre + m[cur];
  }, 0);
}
console.log(finalValueAfterOperations(['--X', 'X++', 'X++']));
console.log(finalValueAfterOperations(['X++', '++X']));
