Array.prototype.myReduce = function (cb, initialValue) {
  let res = initialValue;

  for (let i = 0; i < this.length; i++) {
    res = res ? cb(res, this[i], i, this) : this[i];
  }

  return res;
};

const array = [1, 2, 3, 4];

const result = array.myReduce((acc, curr, i, array) => {
  return acc + curr;
}, 0);

console.log(result);
