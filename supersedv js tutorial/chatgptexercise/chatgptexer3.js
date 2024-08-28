// // Write a function that takes a string and returns the string with all vowels replaced by '*'.
// const password = 'jlencina30';
// const hide = hidepassword(password);
// function hidepassword(password){

//     return password.replace(/[aeiou]/gi, '*');
// }
// console.log(hide);


// // Write a function that takes an array of strings and returns a new array with only the strings that do not contain the letter 'e'.
// const myname = ['lemuel', 'encina', 'john', 'angelo']
// const consonant = consocheck(myname)
// function consocheck(str){
//     const newarr = []
//    for(let i = 0; i< str.length; i++ ){
//         if(!str[i].includes('e')){
//             newarr.push(str[i])
//         }
//    }
//    return newarr
// }
// console.log(consonant);

// // Write a function that takes a string and returns the number of words in the string.
// const namee = 'jeel';
// const lengthcheck = namelength(namee)
// function namelength(str){
//         return str.length;
// }
// console.log(lengthcheck);

// // Write a function that takes an array of numbers and returns a new array with the numbers in reverse order.
// const numarr = [2, 4, 6, 8, 10];
// const reverse = reversearray(numarr);
// function reversearray(arr){
//     return arr.reverse();
// }
// console.log(reverse);


const arrnum1 = [ 20, 30, 40, 50, 60];
const arrnum2 = [10, 20, 35, 40, 60];

const compare = comparearr(arrnum1, arrnum2);
function comparearr(arr, arr2) {
    let newarr = [];
        for (let i = 0; i < arr.length; i++){
          if(arr2.includes(arr[i]) && !newarr.includes(arr[i])){
            newarr.push(arr[i]);
          }
    }
    return newarr;
}
console.log(compare);




