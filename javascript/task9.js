/**
 * 
 * Finding different elements is not in the combined zone between 2 arrays.
 * @param Array1 <Array>
 * @param Array2 <Array>
 * @returns a array contains different elements isn't in the combined zone.
 */

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const B = [3, 4, 6, 10, 9];

const differentBy = (arrays, value) => {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < value.length; j++) {
      if (result[result.length - 1] === arrays[i]) {
        result.pop(arrays[i]);
      }

      if (arrays[i] === value[j]) {
        break;
      }

      result.push(arrays[i]);
    }
  }
  return result;
};

const myPatient = [
  {
    id: 20,
    name: 'Nguyen Huu Ha'
  },
  {
    id: 23,
    name: 'Nguyen Ky Anh'
  },
  {
    id: 26,
    name: 'Tran Manh Duc'
  },
  {
    id: 8,
    name: 'Bui Xuan Duong'
  },
  {
    id: 2,
    name: 'Nguyen Tien Hiep'
  },
  {
    id: 1,
    name: 'Ngo Ba Dong'
  },
]
const memberList = [
  {
    id: 23,
    name: 'Nguyen Ky Anh'
  },
  {
    id: 26,
    name: 'Tran Manh Duc'
  },
  {
    id: 1,
    name: 'Ngo Ba Dong'
  },
]

const customDifferentBy = (arrays, values, key) => {
  const result = [];
  let arrayItem, valueItem
  for (let i = 0; i < arrays.length; i++) {
    arrayItem = arrays[i]
    for (let j = 0; j < values.length; j++) {
      valueItem = values[j]
      if (result[result.length - 1] === arrayItem) {
        result.pop(arrayItem);
      }

      if (arrayItem[key] === valueItem[key]) {
        break;
      }

      result.push(arrayItem);
    }
  }
  return result;
};

console.log(differentBy(A, B))
console.log(customDifferentBy(myPatient, memberList, 'id'))