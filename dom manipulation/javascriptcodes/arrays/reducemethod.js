// exercise 5
//  Create an array of numbers and use the .reduce() method to find the maximum number in the array.

let numarr = [8, 6, 10, 15, 6, 18]
let max = numarr.reduce((high, curr) => {
    return high > curr ? high : curr;
});

console.log(max)