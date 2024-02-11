// Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.

function print() {
  let arr = [1, 2, 3, 4, 5];
  for (let i = 1; i <= arr.length; i++) {
    setTimeout(function () {
      console.log(arr[i - 1]);
    }, i * 3000);
  }
}

print();
