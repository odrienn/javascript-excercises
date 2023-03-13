// https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup(s) {
  let result = [];
  let string = "";
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s[i].length; j++){
      if(s[i][j] !== string[string.length - 1]){
        string += s[i][j];
      }
    }
    result.push(string);
    string = "";
  }
  return result;
};