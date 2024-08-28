// ternary operator sort of a shortcut for if else

// sample 1
const result = true ? 'it is true' : 'it is false';
console.log(result)
// output is it is true

// sample 2 
const result2 = 0 ? 'true' : 'false'
console.log(result2);
// output is false

// guard operator
false && console.log('hello');
// output is none
// if the guard op has a value of false in left, the code will not run

const message = false && console.log('helow')
console.log(message);
//  the output is false and stored in the variable


const message2 = 5 && console.log('helow')
console.log(message);
//  the output is hello and stored in the variable

// sort like a guard op is shortcut for
// let mensahe;
// if (mensahe) {
//     message = 'hello'
// }



// default operator ( || )

const currency = 'EUR' || 'USD'
console.log(currency)
//  EUR

const currency2 = undefined || 'USD'
console.log(currency2)
//  USD

// shortcut for if statement like this
// let currency;
// if (!condition) {
//         currency = 'USD';
// }