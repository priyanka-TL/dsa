// Find all negative numbers in an array

let arr = [1, -9, 3, -2, 5, -7]

console.log(getNegativeNumbers(arr))

function getNegativeNumbers(arr) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            array.push(arr[i])
        }
    }

    return array

    // or 
    return arr.filter(element => element < 0)
}

function getNegativeNumbersCount(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++
        }
    }

    return count

    // or 
    return arr.filter(element => element < 0).length
}