/**
 * 
 * @param {number} x : row number in 2D Array
 * @param {number} y : column number in 2D Array
 * @returns 2D Array
 */
 function get2DArray(x, y) {
  let arr = new Array();
  let el = 0;

  for (let i = 0; i < x; i++) {
    arr[i] = new Array();
    for (let j = 0; j < y; j++) {
      if (j > 0 || i > 0) {
        el += 1;
      }
      arr[i][j] = el;
    }
  }

  return arr;
}

// EXAMPLE
console.log(get2DArray(3, 5));
