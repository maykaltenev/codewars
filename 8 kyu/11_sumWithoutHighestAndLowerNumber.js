// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest
//  element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, 
// even if there are more than one with the same value.

// Mind the input validation.

// Example

let sumArray = a => a ? a.sort((a, b) => a - b).slice(1, -1).reduce((s, e) => s + e, 0) : 0;
console.log((sumArray([6, 2, 1, 8, 10])));
console.log((sumArray([])));
console.log((sumArray(['ddas'])));
console.log((sumArray(['null'])));
