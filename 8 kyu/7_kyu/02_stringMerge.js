// Given two words and a letter,
// return a single word that's a combination of both words,
// merged at the point where the given letter first appears
// in each word. The returned word should have the beginning
// of the first word and the ending of the second, with the 
// dividing letter in the middle. You can assume both words
// will contain the dividing letter.

function stringMerge(string1, string2, letter) {
    let result = '';
    let stringOneIndex = string1.indexOf(letter);
    let stringTwoIndex = string2.indexOf(letter);
    let stringOneSlice = string1.slice(0, stringOneIndex);
    let stringOneTwoSlice = string2.slice(stringTwoIndex);
    return result += stringOneSlice + stringOneTwoSlice;
}

console.log(stringMerge("hello", "world", "l")) // ==> "held"
console.log(stringMerge("coding", "anywhere", "n")) //==> "codinywhere"
console.log(stringMerge("jason", "samson", "s")) //==> "jasamson"
console.log(stringMerge("wonderful", "people", "e"))// ==> "wondeople"