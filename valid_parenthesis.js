// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens){
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '('){
      n++;
    }
    if (parens[i] == ')') {
    n--;
    }
    if (n < 0) { 
      return false;
    }
  }
  return true;
}