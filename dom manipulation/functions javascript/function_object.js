// functions add

function add(num1, num2) {
    return num1 + num2;
}

console.log("The sum of num1 and num2 in the function add is " + add(10, 20)); 
/* string concatenate plus calling a function and using parameters as variables.*/
// OUTPUT : The sum of num1 and num2 in the function add is 30 

// functions assigning into a variable

const func = (name) => {
    return `Hello slapsoil ${name} `;
}
console.log(func("lem"));
// the output is Hello slapsoil lem 


const planets = (order, size) => {
    const msgbox = `The planet ${order}is one of the big planets in solar system and a size of ${size} miles.`
    return msgbox;
}
console.log(planets("Earth ", "million"))
// the output is The planet Earth is one of the big planets in solar system and a size of million miles.




//  ------------------------ ------------------------------------ ---------------------------- -------------------------------- -----------


// objects hehehe
const fruits = {
    name: 'apple',
    color: 'red',
    kilo: '2kg'
}

console.log(fruits.name); /* apple */

delete fruits.kilo
fruits.name = 'orange'
fruits.color = 'orangetoo'
fruits.kilo = '1kg'
fruits.time = '1pm'
console.log(fruits);
// the output is { name: 'orange', color: 'orangetoo', kilo: '1kg', time: '1pm' }
console.log(fruits.kilo);
//  1kg



const solarsystem = {
    planetOne: 'mercury ',
    planetTwo: 'venus',
    planetThree: 'earth',
    planetFour: 'jupiter',
    planetFive: 'Uranus',
    
}
console.log(solarsystem)

const twoplanets = solarsystem.planetOne + solarsystem.planetTwo
console.log(twoplanets)



