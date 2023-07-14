Array.prototype.myFilter = function (cb) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};

const array = [1, 2, 3, 4];

const result = array.myFilter((num, i, array) => {
  return num > 1;
});

console.log(result);
