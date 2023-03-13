// https://www.hackerrank.com/challenges/sock-merchant/problem?h_r=internal-search

function sockMerchant(n, ar) {
  let result = 0;
  let counter = {};
  for(let i = 0; i < n; i++) {
      if(counter.hasOwnProperty(ar[i])){
          counter[ar[i]] +=1
      } else {
          counter[ar[i]] =1
      }
  }
  for( const nums in counter){
      if( counter[nums] % 2 === 1){
          result += (counter[nums]) - 1;
      } else {
          result += counter[nums];
      }
  }
 return result / 2;
}
