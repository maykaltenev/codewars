function alphabetPosition(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        if (typeof text[i].toLowerCase() !== 'string') {
            result += '';
        } else {
            switch (text[i].toLowerCase()) {
                case 'a':
                    result += ' 1';
                    break;
                case 'b':
                    result += ' 2';
                    break;
                case 'c':
                    result += ' 3';
                    break;
                case 'd':
                    result += ' 4';
                    break;
                case 'e':
                    result += ' 5';
                    break;
                case 'f':
                    result += ' 6';
                    break;
                case 'g':
                    result += ' 7';
                    break;
                case 'h':
                    result += ' 8';
                    break;
                case 'i':
                    result += ' 9';
                    break;
                case 'j':
                    result += ' 10';
                    break;
                case 'k':
                    result += ' 11';
                    break;
                case 'l':
                    result += ' 12';
                    break;
                case 'm':
                    result += ' 13';
                    break;
                case 'n':
                    result += ' 14';
                    break;
                case 'o':
                    result += ' 15';
                    break;
                case 'p':
                    result += ' 16';
                    break;
                case 'q':
                    result += ' 17';
                    break;
                case 'r':
                    result += ' 18';
                    break;
                case 's':
                    result += ' 19';
                    break;
                case 't':
                    result += ' 20';
                    break;
                case 'u':
                    result += ' 21';
                    break;
                case 'v':
                    result += ' 22';
                    break;
                case 'w':
                    result += ' 23';
                    break;
                case 'x':
                    result += ' 24';
                    break;
                case 'y':
                    result += ' 25';
                    break;
                case 'z':
                    result += ' 26';
                    break;
            }
        }
    }

    return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )