function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}


console.log(toCamelCase('the-stealth-warrior'))