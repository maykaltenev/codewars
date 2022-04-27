
function anagrams(word, words) {
    let result = [];
    let wordContains = {};
    for (let i = 0; i < word.length; i++) {
        if (!Object.keys(wordContains).includes(word[i])) {
            wordContains[word[i]] = 0;
            wordContains[word[i]] += 1;
        } else {
            wordContains[word[i]] += 1;
        }
    }
    for (const item of words) {
        if (!Object.keys(wordContains).includes(word[i])) {
            wordContains[word[i]] = 0;
            wordContains[word[i]] += 1;
        } else {
            wordContains[word[i]] += 1;
        }
    }
    return wordContains;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // => ['carer', 'racer']
anagrams('laser', ['lazing', 'lazy', 'lacer']) //=> []