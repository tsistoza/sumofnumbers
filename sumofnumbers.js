const sumFor = (list) => {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
};
console.log(sumFor([1, 2, 3, 4]));

const sumWhile = (list) => {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
};
console.log(sumWhile([1, 2, 3, 4]));

const sumRecursion = (list, i) => {
  let sum = 0;
  if (i < 0) {
    return 0;
  }
  if (i === 0) {
    return list[i];
  }
  sum += sumRecursion(list, i - 1) + list[i];
  return sum;
};
console.log(sumRecursion([1, 2, 3, 4], 3));

const sumTheSimpleWay = (list) => _.reduce(list, (memo, num) => memo + num, 0);
console.log(sumTheSimpleWay([1, 2, 3, 4]));
