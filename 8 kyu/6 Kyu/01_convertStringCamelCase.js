function toCamelCase(str) {
    const regExp = /[-_]\w/ig;
    return str.replace(regExp, (match) => {
        return match[1].toUppercase()
    });
}


console.log(toCamelCase('the_stealth_warrior'))