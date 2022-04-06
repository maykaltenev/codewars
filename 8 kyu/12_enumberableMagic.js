function eachCons(array, n) {
    return array.map((x, y) => array.slice(y, y + n)).filter(x => x.length == n);
}



console.log(eachCons([1, 2, 3, 4], 4))