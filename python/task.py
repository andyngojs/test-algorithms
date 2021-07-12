# Task 1:
def check():
    arr = []
    n = int(input('Enter your number of array: '))
    for i in range(0, n):
        item = int(input('Enter item in array: '))

        arr.append(item)

    k = int(input('Enter your number k: '))
    isInclude = False
    for ele in range(0, len(arr)):
        if arr[ele] == k: 
            isInclude= True
        
    if isInclude:
        print('Có tồn tại phần tử k trong mảng')
    else: 
        print('Không có tồn tại phần tử k trong mảng')

check()

# Task 2:
def checkPrime():
    n = int(input('Enter your prime number: '))
    if n % 2 != 0:
        print('is Prime')
    else:
        print('not a prime')

checkPrime()