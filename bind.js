const car = {
  brand: 'Ferrari',
};

function purchase(currency, price) {
  console.log(`I purchased ${this.brand} for ${currency}${price}`);
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error(this + 'can not be bound as it is not callable');
  }

  context.fn = this;

  return function (...nextArgs) {
    return context.fn(...args, ...nextArgs);
  };
};

const newFunc = purchase.myBind(car);
newFunc('$', '999');
