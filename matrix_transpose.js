// https://www.codewars.com/kata/52fba2a9adcd10b34300094c

function transpose(matrix) {
    let result = new Array(matrix[0].length);
    for (let j = 0; j < matrix[0].length; j++) {
      result[j] = new Array(matrix.length);
      for (let i = 0; i < matrix.length; i++) {
        result[j][i] = matrix[i][j];
      }
    }
    return result;
  }

//Second solution

function transpose(matrix) {
    return matrix[0].map((column, i) => matrix.map(row => row[i]));
}
