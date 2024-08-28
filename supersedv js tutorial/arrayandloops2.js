let index = -1
function findIndex(array, word){
    for (let i = 0; i < array.length; i++) {
        if (word == array[i]){
            index = i
            return index
         }
}
    return index
}
console.log(findIndex(['green', 'red', 'blue', 'red'], 'blue'));
//  1 is the index
console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow'));

function removeEggs(foods){
    let result = []
    for (let i = 0; i < foods.length; i++) {
            if (foods[i] == 'eggs'){
                continue;
                
            }else {
                result.push(foods[i])
            }
    }
    return console.log(result);
}
removeEggs(['eggs', 'apple', 'eggs', 'ham'])


function removeEggs2(foods){
    let result = []
    let eggsremove = 0
    for (let i = 0; i < foods.length; i++) {
            if (foods[i] == 'eggs' && eggsremove < 2){
                eggsremove++
                continue;
            }else {
                result.push(foods[i])
            }
    }
    return console.log(result);
}
removeEggs2(['eggs', 'apple', 'eggs', 'eggs','ham'])


function removeEggs3 (foods) {
    let result = []
    let eggsremove = 0
    for (let i = 0; i < foods.length; i++) {
            foods.reverse();
            if (foods[i] == 'eggs' && eggsremove < 2){
                eggsremove++
                continue;
            }else {
                result.push(foods[i])
            }
    }
    result.reverse()
    return console.log(result);
}
removeEggs3(['eggs', 'apple', 'eggs', 'eggs','ham'])



    let num = 20
    for(let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }else if(i % 3 === 0) {
            console.log('fizz');
        }else if (i % 5 === 0){
            console.log('buzz');
        }else {
            console.log(i);
        }
    }



function isPalindrome(str) {
    const reverse = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const word = str.split('').reverse().join('')
    return reverse === word
}
console.log(isPalindrome('sheehs'));

