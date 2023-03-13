// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
  arr.reverse();
  let result = 0; 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 1 ){
      result += Math.pow(2,i);
    }
  }
  return result;
};

// Second solution

const binaryArrayToNumbers = arr => parseInt(arr.join(''), 2);