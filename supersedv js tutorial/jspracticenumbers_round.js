//  numbers math and round javascript!....

// PROBLEM 1: CALCULATE THE 3 ORDERS IN A SNACKBAR...
const soup = 10; 
const burgers = 8 * 3; /* 3 burgers for 8 each */
const iceCream = 5

const orders = soup + burgers + iceCream;
console.log(orders); /* output is 39 */

// PROBLEM 2: CALCULATE 3 PEOPLE WITH THE SAME ORDER IN PROBLEM 1.
//  CALCULATE HOW MUCH EACH PERSON PAYS.

const people = 3;
const billForThree = orders * 3;
const payment = billForThree / people;
console.log(`Each person will pay ${payment} pesos`);
// output is Each person will pay 39 pesos.


// PROBLEM 3: CALCULATE THE TOTAL COST OF A TOASTER 18.50 AND 2 SHIRTS 7.50 EACH
const toaster = 18.50
const shirts = 7.50 * 2 /* 2 shirts */
const total = toaster + shirts
console.log(`the total is ${total}`);
// output is the total is 33.5

// PROBLEM 4: CALCULATE A 10% TAX FOR THE TOTAL IN PROBLEM 3
const tax = total * .10 ;
console.log(`the tax will be ${tax}`);
// output is  the tax will be 3.35

// PROBLEM 5: CALCULATE THE 20% TAX OF THE TOTAL IN 2C
const anotherTax = total * .20;
console.log(`the tax will be ${anotherTax}`);
// output is  the tax will be 6.7

console.log()

// FINAL PROBLEM: CALCULATE THE TOTAL BEFORE TAX, THE ESTIMATED TAX, AND THE ORDER TOTAL.
console.log("ORDER SUMMARY")
const bball = 2080;
const toast = 1899;
const shirt = 799;
const shipping = 4.99;
const items = Math.round((bball + toast + shirt) ) / 100;
console.log(`Items (3):--------------$${items}`)
// output is Items (3): $48
console.log(`Shipping & Handling:----$${shipping}`)
const tottax = shipping + items;
console.log(`Total before tax:-------$${tottax}` );
// output is Total before tax: $52.99
const estimatedTax = Math.round((bball + toast + shirt) * .10) / 100;
console.log(`Estimated tax (10%):----$${estimatedTax}`)
// output is Estimated tax (10%):$4.78
console.log('-----------------------------------');
const orderTotal = Math.round ((5299 + 478)) / 100;
console.log(`Order Total: $${orderTotal}`)
console.log("THANK YOU FOR ORDERING")


console.log()

console.log("math.floor and math.ceil");
// round a number down using math.floor for positive  
const num = Math.floor(2.8)
console.log(num)
// output is 2

// round a number up using math.ceil
const sample = Math.ceil(2.2)
console.log(sample)
// output is 3




