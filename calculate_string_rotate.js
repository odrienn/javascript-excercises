// https://www.codewars.com/kata/5596f6e9529e9ab6fb000014

function shiftedDiff(first,second){
  for (let i = 0; i < first.length; i++){
    if (first === second) {
      return i;
    }
    first = rotLeft(first, first.length-1)
  }
  return -1;
}
function rotLeft(arr, n) {
     let arrTemp = arr.split(``);
     for (let i = 0; i < n; i++) {
         let temp = arrTemp.shift();
        arrTemp.push(temp);
     }
    return arrTemp.join(``);
}


