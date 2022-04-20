// An array is defined to be odd - heavy if it contains
// at least one odd element and every element whose value 
// is odd is greater than every even - valued element.
// write a function called isOddHeavy or is_odd_heavy 
// that accepts an integer array and returns true if the array 
// is odd-heavy else return false.
function isOddHeavy(n) {
    let odd = []
    let even = []
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            even.push(n[i])
        } else {
            odd.push(n[i])
        }
    }
    let maxOddCounter = 0;
    let maxEvenCounter = 0;
    console.log(even)
    console.log(odd)
    let maxEven = Math.max(...even);
    // let minOdd = Math.min(...odd)
    if (odd.length === 0 && even.length === 0) {
        return false;
    }
    for (let i = 0; i < odd.length; i++) {
        if (maxEven > odd[i]) {
            maxEvenCounter++
        } else {
            maxOddCounter++
        }
    }
    console.log(maxEvenCounter);
    console.log(maxEvenCounter);
    return maxOddCounter > maxEvenCounter

}

console.log(isOddHeavy([0, 2, 19, 4, 4])) //true ;
console.log(isOddHeavy([1, -2, -1, 2])) //false);