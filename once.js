function once(func, context) {
  let ran;

  return function (...args) {
    if (func) {
      ran = func.apply(context || this, args);
      func = null;
    }
    return ran;
  };
}

const runOnce = once((a, b) => console.log(a + b));

runOnce(1, 2);
runOnce(2, 3);
runOnce(4, 5);
