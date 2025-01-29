const fn1 = (a, b, callBack) => {
  let result = a + b;
  callBack(a, b);
  return result;
};

const fn2 = (param1, param2) => {
  console.log(
    `result is ready for ${param1} and ${param2}`
  );
}
const getTotal = fn1(5, 5, fn2);

const getTotal2 = fn1(5, 8, (param1, param2) => {
  console.log(
    `result is ready for ${param1} and ${param2}`
  );
});

console.log(getTotal);
console.log(getTotal2);
