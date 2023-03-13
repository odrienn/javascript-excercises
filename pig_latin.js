// https://www.codewars.com/kata/520b9d2ad5c005041100000f

function pigIt(str) {
  var arrayWord = str.split(' ');
  
  return arrayWord.map(function(letter) {
    if(letter === '!' || letter === '?' ||letter === '.'){
     return letter
    }
    var firstLetter = letter.charAt(0);
    
    return letter.slice(1) + firstLetter + 'ay';
  }).join(' ');
}
