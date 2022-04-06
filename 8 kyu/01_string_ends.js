function solution(str, ending) {
    // TODO: complete
    let partToCheck = str.slice(str.length - ending.length);
    console.log(partToCheck)
    if (partToCheck === ending) {
        return true;
    } else {
        return false;
    }
}


console.log(solution('abc', 'bc')) // returns true
console.log(solution('abc', 'd')) // returns false