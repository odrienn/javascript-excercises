// https://www.hackerrank.com/challenges/mini-max-sum/problem

function minMax(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);
  console.log((sum - maxVal) + ' ' + (sum - minVal));
};