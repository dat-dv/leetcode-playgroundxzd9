function groupBy(arr: any[], keyFn: (v) => any) {
  const obj = {};

  for (const v of arr) {
    const key = keyFn(v);
    if (obj[key]) {
      obj[key].push(v);
    } else {
      obj[key] = [v];
    }
  }

  return obj;
}

const students = [
  { id: 1, name: 'doan', class: 101 },
  { id: 2, name: 'dat', class: 101 },
  { id: 3, name: 'duy', class: 102 },
  { id: 4, name: 'binh', class: 103 },
  { id: 5, name: 'bien', class: 102 },
];

const studentsGroupByClass = groupBy(students, (v) => {
  return v.class;
});
console.log(studentsGroupByClass);
