// const hour = 16;
// const name = 'lisa';
// if ( hour > 0 && hour < 12){
//     console.log(`Good Morning ${name}`)
// }else {
//     console.log(`Good Afternoon ${name}`);
// }
// // Good afternoon lisa

// const age = 3;
// const isHoliday = true;
// if (  (age <= 6 || age >= 65) && !isHoliday) {
//     console.log('Discount')
// } else {
//     console.log('No Discount');
// }
// discount

// 3:49:38;



// COIN-FLIP GAME
let flip = Math.random()
let result = ''
flip < 0.5 ? result = 'heads': result = 'tails'
console.log(result);

let guess ='heads' 
guess === result ? console.log('You Win') : console.log('You Lose');


// cart quantity conditions exer 6k (reffering to 5k)
const cartQuantity = 11;
cartQuantity > 10 ?  console.log('The Cart is Full') : 
console.log(`Your cart has ${cartQuantity} Items`);

// for buttons that is minus the quantity
let items = 1;
if (items - 1 <= 0){
    console.log('Not enough items in the Cart');
}else {
    --items; /* if the button is minus 1 and so on*/
    console.log(`YOUR ITEMS: ${items}`);
}

