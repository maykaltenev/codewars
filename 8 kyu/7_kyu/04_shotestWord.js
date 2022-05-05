function findShort(s) {
    let lowest = Number.MAX_VALUE;;
    let arrayOfElements = s.split(' ');
    for (let i = 0; i < arrayOfElements.length; i++) {
        if (arrayOfElements[i].length < lowest) {
            lowest = arrayOfElements[i].length;
        }
    }
    return lowest;
}