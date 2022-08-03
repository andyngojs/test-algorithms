let arrTotal2D = new Array();

for (let row = 0; row < 6; row++) {
  arrTotal2D.push([])
  for (let col = 0; col < 5; col++) {
    arrTotal2D[row][col] = {value: '', status: 'normal'}
  }
}

console.log(arrTotal2D)

// Output Array 2D

// [
//     [{...}, {...}, {...}, {...}, {...}]
//     [{...}, {...}, {...}, {...}, {...}]
//     [{...}, {...}, {...}, {...}, {...}]
//     [{...}, {...}, {...}, {...}, {...}]
//     [{...}, {...}, {...}, {...}, {...}]
//     [{...}, {...}, {...}, {...}, {...}]
// ]