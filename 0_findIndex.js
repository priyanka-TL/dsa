
// Find the index of an element in an array

let arr = [4, 2, 0, 10, 8, 30]
console.log(searchElement(arr, 21))

function searchElement(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i
        }
    }
    return -1

    // or 
    return arr.indexOf(value)
}
