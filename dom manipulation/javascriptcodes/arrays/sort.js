// exercise 10
// Create an array of numbers and use the .sort() method to sort the array in ascending order.

let nums = [ 35, 8 , 10 , 15 ,20 ,9 ,11]
let arrangenums = nums.sort((a, b) => {
    return a - b
});
console.log(arrangenums)