let arr = [0,1, 1, 1, 1]
let deepCopy = [...arr]

arr[1] = 2

console.log(arr)
console.log(deepCopy)