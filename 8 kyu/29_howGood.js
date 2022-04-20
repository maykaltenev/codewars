// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. 
// For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }

    let average = sum / classPoints.length;
    console.log(average)

    return yourPoints > average ? true : false;
    // if (parseInt(average) > yourPoints) {
    //     return true;
    // } else {
    //     return false;
    // }
}
console.log(betterThanAverage([2, 3], 5)) //, true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21))