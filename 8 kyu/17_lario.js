// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.
// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.
//  Each pipe should be connecting, since the levels ascend, you can assume every number in the sequence after the first index will be greater than the previous and that there will be no duplicates.
// Task
// Given the a list of numbers, return the list so that the values increment by 1 for each index up to the maximum value.

function pipeFix(numbers) {
    let fixed = [];
    let start = numbers[0];
    console.log(start);
    let end = numbers[numbers.length - 1];
    console.log(end);
    for (let i = start; i <= end; i++) {
        if (i === numbers[i]) {
            fixed.push(numbers[i]);
        } else {
            fixed.push(i)
        }

    }
    return fixed;
}
console.log(pipeFix([1, 2, 3, 12]));
console.log(pipeFix([-1, 4]));