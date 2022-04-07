// Your boss decided to save money by purchasing some
//  cut - rate optical character recognition software 
//  for scanning in the text of old novels to your database.
//  At first it seems to capture words okay, but you quickly notice that it
//   throws in a lot of numbers at random places in the text.

// we receive input string
// for loop on the string length
// accumulator - we fill the end result without numbers
// if number do not add in acc
// print result
function stringClean(array) {
    let accumulator = '';
    let numbers = ['0', '1', '2', '3', '4', '5', '7', '8', '9']
    for (let i = 0; i < array.length; i++) {
        if (!numbers.includes(array[i])) {
            accumulator += array[i];
        } else {
            accumulator += ''
        }
    }
    return accumulator;
}
console.log(stringClean('This looks5 grea8t!'))