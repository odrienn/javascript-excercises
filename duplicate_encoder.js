// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

function duplicateEncode(word){
  const wordspl = word.toLowerCase().split('');
  let result = '';
  let countLetters = {};
  for (let i= 0; i < wordspl.length; i++) {
    if( countLetters[wordspl[i]]){
      countLetters[wordspl[i]]++;
    } else {
      countLetters[wordspl[i]] = 1;
    }
  }
  result = wordspl.map((letter) => {
    if(countLetters[letter] && countLetters[letter] > 1){
      return ')';
    } else {
      return '(';
    }
  })
  return result.join('');
}