// Write a function that takes two numbers as arguments and returns their sum.
function add(num1, num2){
    sum = num1 + num2;
    return console.log(sum)
}
// add(3, 7);


// Write a function that takes an array of numbers and returns the largest number in the array.
function largest(arr){
    let largest = arr[0];
    for(let i = 0; i <arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    return console.log(largest);;
}
largest([8, 10, 19, 6]);



// Write a function that takes a string as an argument and returns the length of the string.
function lengthchecker(name){

    console.log(name.length);
}
lengthchecker('lemuel');




// Write a function that takes an array of strings and returns a new array with all the strings capitalized.
function capsAll(stringarr){
    const capatilizedString = []
    for(let i = 0; i < stringarr.length; i++){
        const caps = stringarr[i].toUpperCase();
        capatilizedString.push(caps)
    }
    return capatilizedString
}

const strings = ["lemuel", "john", "clarence", "angelo"];
const capitilized = capsAll(strings);
console.log(capitilized);



// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
function evensums(arr) {
    let sumarr = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0){
            sumarr += arr[i];
        }
    }
    return sumarr
}
const numarr = [2, 3, 7, 4];
const results = evensums(numarr);
console.log(results);



// Write a function that takes a string as an argument and returns a new string with all the vowels removed.
function removeVowels(arrstring){

    const vowels = ['a', 'e', 'i' , 'o', 'u'];
    let newStr = '';
    for (let i = 0; i < arrstring.length; i++){
     const currentchar = arrstring[i].toLowerCase();
     if (!vowels.includes(currentchar)){
        newStr += arrstring[i];
     }
    }
    return newStr;

}
const names = 'lemuel';
const vowels = removeVowels(names);
console.log(vowels);

// Write a function that takes an array of numbers and returns a new array with all the numbers multiplied by 2.
function multipliedByTwo(arrnum){
    const newarr = [];
    let product = 0
    for(let i = 0; i < arrnum.length; i ++){
         product = arrnum[i] * 2;
         newarr.push(product)
    }
    return newarr;
}

const arrofNum = [2, 4, 6, 8, 10];
const multiply = multipliedByTwo(arrofNum);
console.log(multiply);


// Write a function that takes a string as an argument and returns a new string with the first letter capitalized.
function capsthefirst(word){
//    const firstLetter = word[0].toUpperCase();
//    const restword = word.slice(1);
//    return firstLetter + restword;

    const first = word.charAt(0).toUpperCase();
    const restword = word.slice(1);
    return first + restword;
    
}

const capsfirst = capsthefirst(names);
console.log(capsfirst);



// Write a function that takes a number as an argument and returns true if the number is even, false otherwise.
function isnumeven(num){
    if (num % 2 == 0) {
        return true;
    }else {
        return false;
    }
}
const checkeven = isnumeven(2);
console.log(checkeven);


// Write a function that takes an array of strings and returns a new array with only the strings that contain the letter 'a'.
function containletterA(nounarr){
    const newnoun = [];
    for (let i = 0; i < nounarr.length; i ++){
        if (nounarr[i].includes('a')){
            newnoun.push(nounarr[i]);
     
        }
    }
    return newnoun;
}

const nouns = ['driving', 'diving' , 'planting', ];
const checkA = containletterA(nouns);
console.log(checkA);


