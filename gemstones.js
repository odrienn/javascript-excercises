// https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr) {
  let finalArray = [];
  for(let i = 0; i < arr.length; i++){
       finalArray.push([...new Set(arr[i])]);
  }
  let newArray = finalArray.reduce((p,c) => {
  return p.filter((e) => {
    return c.includes(e)
  });
});
  return newArray.length;
};