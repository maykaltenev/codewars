function toFreud(string) {
    let result = [];
    if (string.length <= 0) {
        return '';
    }
    let array = string.split(' ');

    for (let i = 0; i < array.length; i++) {
        result.push('sex')
    }
    return result.join(' ');
}
console.log(toFreud("This is a test"));