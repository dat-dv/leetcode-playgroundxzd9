function checkIsHappy(n: number, unique: any): boolean {
  unique.add(n);

  let total = 0;
  for (const i of String(n)) {
    total += Number(i) ** 2;
  }

  if (total === 1) return true;
  if (unique.has(total)) return false;
  return checkIsHappy(total, unique);
}

function isHappy(n: number): boolean {
  const unique = new Set<number>();
  return checkIsHappy(n, unique);
}

console.log(isHappy(19));
