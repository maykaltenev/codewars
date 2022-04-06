function squareArea(A) {
    let radius = (A * 4) / (2 * Math.PI)
    let areaSquare = Math.pow(radius, 2).toFixed(2);
    return parseFloat(areaSquare)
}
console.log(squareArea(2))