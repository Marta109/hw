// Task 1: Custom Filter Function---------------------------
const numbers = [5, 10, 15, 20];
const customFilter = (numbers, callback) => {
  const result = [];
  for (const el of numbers) {
    if (callback(el)) result.push(el);
  }
  return result;
};
const result = customFilter(numbers, (num) => num > 10);
console.log(result);

// Task 2: Custom ForEach Function--------------------------
const items = ['apple', 'banana', 'cherry'];

const customForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
};
customForEach(items, (item, index) => {
  console.log(`${index}: ${item}`);
});

// Task 3: Custom Map Function--------------------------
const numbersToDouble = [1, 2, 3];

const customMap = (arr, callback) => {
  const result = [];
  for (const el of arr) {
    result.push(callback(el));
  }
  return result;
};
const customMapResult = customMap(numbersToDouble, (num) => num * 2);
console.log(customMapResult);

// Extra: Implement these methods as array built-in methods.

Array.prototype.customFilter = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('error');
  }

  if (typeof callback !== 'function') {
    throw new Error('error callback');
  }

  const result = [];

  for (const el of this) {
    if (callback(el)) result.push(el);
  }

  //todo-----or-------------
  //   for (let i = 0; i < this.length; i++) {
  //     let bool = callback(this[i], i, this);
  //     if (bool) result.push(this[i]);
  //   }

  return result;
};

console.log(numbers.customFilter((num) => num > 10));

// ! ------learn js -----Вычислить сумму чисел до данного-----------------------------
//todo 1. С использованием цикла.---------------
// const sumTo = (num) => {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//       sum += i;
//     }
//     return sum;

// };

//todo 2.Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// const sumTo = (num, sum = 0) => {
//   if (num >= 1) {
//     sum += num;
//     return sumTo(--num, sum);
//   } else return sum;
// };

//todo 3. С использованием формулы арифметической прогрессии.
const sumTo = (num) => (num * (num + 1)) / 2;

console.log(sumTo(1)); //= 1
console.log(sumTo(2)); //= 2 + 1 = 3
console.log(sumTo(3)); //= 3 + 2 + 1 = 6
console.log(sumTo(4)); //= 4 + 3 + 2 + 1 = 10
console.log(sumTo(100)); //= 100 + 99 + ... + 2 + 1 = 5050

//! factorial---------------------------
const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5)); //120

//! Числа Фибоначчи ------------------------

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2
console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757
