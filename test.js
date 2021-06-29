function check(arr, k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != k) 
        continue

        if (arr[i] == k ) {
            console.log('có tồn tại')
            break
        }

    }
}

check([1,2,3,4,5], 4)