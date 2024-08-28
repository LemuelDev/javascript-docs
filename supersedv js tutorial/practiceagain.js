// function add(a, b) {
//     return a + b;
// }
// console.log(add(15, 15));


// const numarr = [ 2, 4, 6, 8, 10];
// const sumarr = sum(numarr);
// function sum(arr){
//     let result = 0
//     for (let i = 0; i < arr.length; i ++){
//         result += arr[i]
//     }
//     return result
// }
// console.log(sumarr);


// const arr = [ 10, 40, 30, 15, 20];
// function biggest(arr){
//     let big = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > big) {
//             big = arr[i]
//         }
//     }
//     return big;
// }
// console.log(biggest(arr));


const n = [10,8,7,5,9,6,9]
function checkduplicate(n){
    n.sort();
    let duplicate = n[0];
    for (let i = 1; i < n.length; i++){
       if (n[i] !== duplicate){
          duplicate = n[i]
       } else {
        return duplicate   
       }
  
    }
    return duplicate
 
}
console.log(checkduplicate(n));
// solved the problem yay!!!!


const numbers = [10, 20, 30 ,40 ,50];
const sum = sumofnum (numbers);
function sumofnum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  return sum
}
console.log(sum);


const names = ["lemuel",'shayne',"ethan"," dona" , " lester"]
const uppercases = touppercase(names);
function touppercase(str) {
  let newstr = []
  for (let i = 0; i < str.length; i ++){
      let upper = str[i].toUpperCase();
      newstr.push(upper)
  }
  return newstr
}
console.log(uppercases);


const lowestarr = [ 4, 6, 8, 10, 2];
const lowest = whatisthelowest(lowestarr)
function whatisthelowest(arr) {
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < num) {
        num = arr[i];
      } 
    }
    return num
}
console.log(lowest);



