const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    var result = "";


    for (let i = 0; i < expr.length; i = i + 10) {
        var result_2 = expr.slice(i, i + 10).replace(/10/gi, ".").replace(/11/gi, "-");
        if (result_2.length === 10) {
            result_2 = " ";
        }
        else {
            result_2 = result_2.replace(/0*/gi, "");
            result_2 = MORSE_TABLE[result_2];
        }
        result = result + result_2;
    }
    console.log(result);
    return result;
}
module.exports = {
    decode
}