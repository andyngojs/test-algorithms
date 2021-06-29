function check(arr, k) {
    let isInclude = false
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            isInclude = true
        }
    }
    isInclude ? console.log('có tồn tại phần tử k = ' + k + ' trong mảng ' + arr) 
        : console.log('không tồn tại phần tử k = ' + k + ' trong mảng ' + arr)
}

check([1,2,3,4,5], 3)
check([1,2,3,4,5], 7)