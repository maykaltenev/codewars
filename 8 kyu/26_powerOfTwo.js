function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i < n.length; i++) {
        result.push(Math.pow(n[i]))
    }
    return result;
}
console.log(powersOfTwo(1))