// Create a counter using closures.

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

const counter1 = counter();
const counter2 = counter();

console.log(counter1.increment());
console.log(counter1.increment());

console.log(counter1.getCount());

console.log(counter1.decrement());
console.log(counter1.getCount());
