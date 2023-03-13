// https://www.codewars.com/kata/54da539698b8a2ad76000228

function isValidWalk(walk) {
  let north = 0;
  let south = 0;
  let west = 0;
  let east = 0;

  for (let i = 0; i < walk.length; i++) {
      if (walk[i] === 'n'){
          north += 1;
      }
      if (walk[i] === 's'){
          south += 1;
      }
     if (walk[i] === 'w'){
          west += 1;
      }
      if (walk[i] === 'e'){
          east += 1;
      }
  }
    return walk.length === 10 && north === south && west === east;;
}

//Second solution

function isValidWalk(walk) {
  const north = walk.filter(item => { return item === "n" }).length;
  const south = walk.filter(item => { return item === "s" }).length;
  const east = walk.filter(item => { return item === "e" }).length;
  const west = walk.filter(item => { return item === "w" }).length;
  
  return walk.length === 10 && north === south && east === west;
}