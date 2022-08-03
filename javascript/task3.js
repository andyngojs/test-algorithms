// Task 3:
function resultOfSum(arr, k) {
    var sum = 0;
    var isSum = false;
    var arrayLength = arr.length;
    for (var i = 0; i < arrayLength; i++) {
        for (var j = i + 1; j < arrayLength; j++) {
            sum = arr[i] + arr[j];

            if (sum == k) {
                isSum = true; 
                console.log(`Array has 2 elements is ${arr[i]} and ${arr[j]} cause sum = ${k}`);
                break;
            } 
        }
    }
    if (!isSum) {
        console.log(`No elements has sum = ${k}`);
    } 
}

resultOfSum([1, 2, 10, 3, 90], 20);