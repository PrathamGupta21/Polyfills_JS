const car = {
  brand: 'Ferrari',
};

function purchase(currency, price) {
  console.log(`I purchased ${this.brand} for ${currency}${price}`);
}

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== 'function') {
    throw new Error(this + 'is not callable');
  }

  if (!Array.isArray(args)) {
    throw new TypeError('CreateListFromArrayLike called on non-object');
  }

  context.fn = this;
  context.fn(...args);
};

purchase.myApply(car, ['$', '999']);
