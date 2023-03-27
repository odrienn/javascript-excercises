// https://www.hackerrank.com/challenges/repeated-string/problem?h_r=internal-search

function repeatedString(s, n) {
  let result = 0;
  let fullReps = Math.floor(n / s.length);
  let remain = n % s.length;
  for( let i = 0; i < s.length; i++) {
      if(s.charAt(i) === 'a'){
          result++;
      }
  }
  result *= fullReps; 
  if(remain) {
      for( let i = 0; i < remain; i++) {
          if(s.charAt(i) === 'a'){
          result++;
      } 
      }
  }
  return result;
}