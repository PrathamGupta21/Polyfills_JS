const car = {
  brand: 'Ferrari',
};

function purchase(currency, price) {
  console.log(`I purchased ${this.brand} for ${currency}${price}`);
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'is not callable');
  }

  context.fn = this;
  context.fn(...args);
};

purchase.myCall(car, '$', '999');
