function toCamelCase(str) {
    let result = [];

    if (str.includes('-')) {
        result = str.split('-');
    } else if (str.includes('_')) {
        result = str.split('_');
    }
    let afterResult = result.join('')
    return afterResult;
}


console.log(toCamelCase('the_stealth_warrior'))