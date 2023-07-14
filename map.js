Array.prototype.myMap = function (cb) {
  const arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
};

const array = [1, 2, 3, 4];

const result = array.myMap((num, i, array) => {
  return num * 3;
});

console.log(result);
