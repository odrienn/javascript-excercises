// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

function rowWeights(array){
  let result1 = 0;
  let result2 = 0;
  for (let i = 0; i < array.length; i++) {
    if(i % 2 === 0) {
      result1 += array[i];
    } else {
      result2 += array[i]
    }
  }
  return [result1,result2];
}