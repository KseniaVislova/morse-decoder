const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let count = expr.length / 10;
let j = count
const arr = []
for (let i = 0; i < count; i++) {
    arr.unshift(expr.slice(-10))
     j = j - 1
  expr = expr.slice(0, j * 10)
}

let res = arr.map(item => {
    let array = []
    if (item === '**********') {
      array.push(' ')
  } else {
      for (let i = 0; i < item.length; i += 2) {
      if ((item[i] + item[i + 1]) === '10') {
        array.push('.')
      } else if ((item[i] + item[i + 1]) === '11') {
        array.push('-')
      } 
      }
  }
  return array.join('');
})

res = res.map(item => {
    for(const i in MORSE_TABLE) {
      if(i === item) {
        item = MORSE_TABLE[i]
    }
  }
  return item;
})

return res.join('')
}

module.exports = {
    decode
}