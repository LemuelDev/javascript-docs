// Write a function that takes an array of numbers and returns the average of all the numbers in the array.
const numarr = [85, 90, 87, 93, 92];
const averageofarr = average(numarr);
function average(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    const ave = sum / arr.length;
    return ave;
}
console.log(averageofarr);

// Write a function that takes a string as an argument and returns a new string with all the spaces removed.
const fullname = 'John Lemuel';
const newName = removespace(fullname);
function removespace(name) {
    let newfullname = name.split(' ').join('');
    return newfullname
}
console.log(newName);


// Write a function that takes an array of strings and returns a new array with all the strings in alphabetical order.
const arrstrings = ['papaya','apple', 'banana', 'orange']
const order = alphabeticalorder(arrstrings);
function alphabeticalorder(arrname){
    return arrname.sort();
}
console.log(order);

// Write a function that takes an array of numbers and returns the largest even number in the array.
const largest = even(numarr);
function even(arr){
    let biggest = arr[0];
    for(let i = 0; i <arr.length; i++) {
        if (arr[i] % 2 == 0){
            if (arr[i] > biggest){
                biggest = arr[i];
            }
        }
    }
    return biggest;
}
console.log(largest);

// Write a function that takes a string as an argument and returns true if the string is a palindrome, false otherwise.
const word = 'pakap'
const palindrome = palindromechecker(word);
function palindromechecker(str){
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');;
    return str === str.split(' ').reverse().join();
}
console.log(palindrome);

const oddarr = [3,10, 14, 17, 23];
const oddonly = oddchecker(oddarr);
function oddchecker(arr){
    let newarr = []
    for( let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(oddonly);

// Write a function that takes a string as an argument and returns a new string with all the letters reversed.
const lastname = 'clarence';
const reversename = reverseString(lastname)
function reverseString(str){
    
    return  str.split('').reverse().join('');;
}
console.log(reversename);


// Write a function that takes an array of numbers and returns a new array with all the numbers sorted in descending order.
const tolowest = tolowestnumber(numarr);
function tolowestnumber(arr){
    let numarr = [];
    let nums = arr.sort((a, b) => b - a);
    numarr.push(nums);
    return numarr;
}
console.log(tolowest);

const newstr = 'encina1234567890';
const strarguments = strcheck(newstr);
function strcheck(str){
    if(str.includes(1234567890)){
        return true;
    }else{
        return false;
    }
 
}
console.log(strarguments);

// Write a function that takes an array of strings and returns a new array with only the strings that have a length of 5 or more characters.
const strArr = ['lemuel', 'jl', 'clarence', 'angelo', 'ralph', 'mike']
const lengthcheker = strchecker(strArr);
function strchecker(str){
    const result = [];
    for(let i = 0; i <str.length; i++){
        if (str[i].length >= 5){
            result.push(str[i]);
        }
    }
    return result;
    
}
console.log(lengthcheker);
