// welcome to object
//  groups multiple values together

// jSON JAVASCRIPT OBJECT NOTATION...
//  stringify, parse, 
// local storage.. setItem, getItem, removeItem

const product = {
    name: 'lemuel',
    age: 18
};

// console.log(product); /* { name: 'lemuel', age: 18 } */
// console.log(product.name); /* lemuel */
// console.log(product.age); /* 18 */


// falsy values
// false, 0, '', NaN, undefined, null


// const profile = {
//     name: 'john lemuel',
//     surname: 'encina',
//     age: 18,
//     course: 'BSIT-1'
// }

// console.log(profile);
// const jayson = JSON.stringify(profile)
// console.log(jayson);


// const bebu = 'bebi'.toUpperCase();
// console.log(bebu);

const amazon = {
    name: 'basketball',
    price: 2095
}
console.log(amazon);
// update a value of a property using dot notation
amazon.price = 2595
console.log(amazon);


// adding some properties to object using bracket notation
amazon['delivery-time'] = '3 days';
console.log(amazon);

function compare (pro1, pro2) {
    if (pro1 > pro2) {
        return console.log(`${pro2} is less expensive.`);
    }else {
        return console.log(`${pro1} is less expensive.`);
    }
}

const shirt = {
    name: 'penshoppe',
    price: 500
}

const shirt2 = {
    name: 'oxygn',
    price: 600
}

compare(shirt.price, shirt2.price);


function isSameProduct(product1, product2) {
    if (
        product1.name === product2.name &&
        product1.price === product2.price
     ) {
        return true;
     }else {
        return false;
     }
}

const product1 = {
    name: 'tshirt',
    price: 500
}
const product2 = {
    name: 'tshirt',
    price: 500
}

console.log(isSameProduct(product1, product2));;


const greet = 'Good Evening'.toLowerCase();
console.log(greet);

const smpl = 'test'.repeat(2);
console.log(smpl);


// objects local storage 
localStorage.setItem()
localStorage.getItem()
localStorage.removeItem()
