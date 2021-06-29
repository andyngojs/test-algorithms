// Task 2: Check a number is prime
function checkPrime(n) {
    if (n % 2 != 0 ) {
        console.log('is prime')
    } else {
        console.log('not prime')
    }
}

checkPrime(5)

// Task 4: 
function convertString(str) {
    console.log('Old String: ' + str)

    var newString = ''
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i]
        
    }
    console.log('New String: ' + newString)
}

convertString('dong ngo')

