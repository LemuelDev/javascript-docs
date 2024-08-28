// write a function that takes in an array of strings and returns a new array with all the strings capitalized.
function caps(str) {
//    str = 'lemuel'
   for (let i = 0; i < str.length; i++) {
        str = str.toUpperCase();
   }
   return console.log(str)


}
caps('burnik') 
// BURNIK
caps('lemuel')
// LEMUEL

// Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.

function sumEvenNumbers(numbers) {
    let sum = 0;
  
    // Loop through each number in the array
    for (let i = 0; i < numbers.length; i++) {
      // Check if the current number is even
      if (numbers[i] % 2 === 0) {
        // If it's even, add it to the sum
        sum += numbers[i];
      }
    }
  
    // Return the sum of all even numbers in the array
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log(sumEvenNumbers(numbers)); // Output: 12


//   Write a function that takes in a number and returns a boolean indicating whether or not the number is prime.

function prime(num) {

    if (num % 2 === 0) {
        return true
    }else {
        return false
    }
    
    
}

prime(3)