// // functionsssssss
// // resuse code 
// //  perform a specific task like calculations and many more

// // rules for function names
// // cant use special words like function
// // cant start with a number
// //  cant use special characters
// // use camelCase for naming functions and variables

// function fun1 () {
//     console.log('Hello');
//     console.log(2 + 2);
// }

// fun1() /* this will run automatically the function */
// // Hello
// // 4

// // the return statement in function..
// // gets us a value out of a function, returning it to the global scope code and access outside those curly braces.
// // we can return a string a number, calculation, and a variable etc.
// // returning a value from a function


// function practice(){
//     const num = 15;
//     let result = ''
//     num >= 18 ?  result = 'adult': result = 'minor'
//     console.log(result);
//     return result;
   
// }
// practice();


// let result = 0;
// function add() {
//     let nums = 9 + 2
//     result = nums
//     return result
//     // under the return syntax will not read inside the function
//     //  once return is implemented, the codes under that will ignored.
//     // simply return is the end of a function
// }   
// add();
// console.log(result);


// // return -- gets a value out of a function
// // parameter -- puts a value into a function

// function calculateTax (param1) {
//     // the 2000 will be substitute in the function with a variable name param1
//     let cost = param1 * .1
//     console.log(cost);
//     // output is 200
//      // output is 400
// }

// calculateTax(2000)
// calculateTax(4000)

// // rules for parameter is 
// // no special words ex: functions
// // cant use a number
// // cant use special characters except $_
// // best practice is use camelCase

// // using two parameters
// function minus(num1, num2) {
//     let result = num1 - num2
//     console.log(result);
//     result < 0 ? console.log('negative one') : console.log('positive one');
// }
// minus(5,3);
// // output is 2 and positive one
// minus(2, 3);
// // output is -1 and negative one

// // assigning a constant value in a parameter
// function cost(quantity, price = 50){
//     let calcu = quantity * price;
//     console.log(calcu);
// }
// cost(2)
// // the output is 2 * 50 is 100

// lesson 7 exercises
function greet(name) {
    !name ? console.log('Hi There!') : console.log(`Hello ${name}`);
}
greet('lem');
// hello lem
greet('');
// undefined so Hi There!


// conversion units with functions
function convertToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32
    console.log(`Celcius to Fah: ${fahrenheit}`);
}
convertToFahrenheit(25);
// output is Celcius to Fah: 77



function convertToCelsius(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9;
    console.log(`Fah to celsius: ${celsius}`);
}
convertToCelsius(86);
// output is Fah to celsius: 30

function fahrenheit(celsius){
    return (celsius * 9/5) + 32;
}
function celsius (fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertTemperature (degrees, unit){
    if (unit === 'C'){
        const result = fahrenheit(degrees);
          return `${result}F`;
    }else if (unit === 'F'){
        const result = celsius(degrees);
        return `${result}C`;
    }
}
console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));



