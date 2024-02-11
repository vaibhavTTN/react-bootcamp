function tracker(func) {
  let invocation = 0;
  let instance = 0;

  this.getInvocationCount = function () {
    return invocation;
  };

  this.getInstanceCount = function () {
    return instance;
  };

  this.getInstance = function () {
    instance++;
    return this.getInvocation.apply(this, null);
  };

  this.Invocation = function () {
    invocation++;
    return func.apply(this, null);
  };

  return this;
}

function counter() {
  let count = 0;
  this.increment = function (increase = 1) {
    count += increase;
    return count;
  };
  this.decrement = function (decrease = 1) {
    count -= decrease;
    return count;
  };
  this.getCount = function () {
    return count;
  };
  return this;
}

const track = tracker(counter);

const counter1 = track.getInstance();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());

console.log(track.invocation());
console.log(track.getInstanceCount());
