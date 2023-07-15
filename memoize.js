function memoize(fn, context) {
  const cache = {};
  return function (...args) {
    if (!cache[args]) {
      cache[args] = fn.call(context || this, ...args);
    }
    return cache[args];
  };
}

const expensiveFunction = (a, b) => {
  for (let i = 0; i < 1000000000; i++) {}
  return a + b;
};

const memoFunction = memoize(expensiveFunction);

console.time('First');
console.log(memoFunction(2, 3));
console.timeEnd('First');

console.time('Second');
console.log(memoFunction(2, 3));
console.timeEnd('Second');
