// Write a generic function chainer
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).
// The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function chain(num, functions) {
    return functions.reduce(function (num, fn) {
        return fn(num)
    }, num);
}

// function add(num) {
//     return num + 1;
// }

// function mult(num) {
//     return num * 30;
// }

console.log(chain(2, [add, mult]));
  // returns 90;