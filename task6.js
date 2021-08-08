function check() {
  let arr1 = [1, 2, 6, 8];
  let arr2 = [2, 9, 6];
  let result = [];

  arr1.filter(function (item1) {
    return arr2.forEach(function (item2) {
      item1 === item2 ? result.push(item2) : [];
    });
  }, []);

  console.log(result);
}

check();
