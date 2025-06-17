function sum(...args) {
  let sum = 0;
  args.forEach((item) => {
    sum += item;
  });
  return sum;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6, 20));
//
console.log("max" + Math.max(1, 4, 3, 5, 6, 9));
const arr = [8, 2, 4, 22, 55];
console.log(`max = ${Math.max(...arr)}`);
