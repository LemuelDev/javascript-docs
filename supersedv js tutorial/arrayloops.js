const nums = [10,20,30];

let last = 99;
nums.pop()
 nums.push(last)


console.log(nums);

const getLastValue = [1,20,22,24,5];
const getLastValueWords = ['hi','hello','good']
console.log(getLastValue[getLastValue.length - 1]);
console.log(getLastValueWords[getLastValueWords.length - 1]);



for (let i = 0; i <= 10; i += 2){
    console.log(i);
}

for (let i = 5; i >= 0; i--) {
    console.log(i)
}


i = 0
while (i <= 10) {
    console.log(i)
    i += 2;
}

z = 5
while (z >= 0) {
    console.log('least to greatest')
    z--
}



const numarr = [1,2,3];
function increaseOne(numarr) {
    let newarr = []
    for (let i = 0; i < numarr.length; i++) {
        let newbie = numarr[i] + 1;
        newarr.push(newbie)
     
    }
    return console.log(newarr);;
}
increaseOne(numarr)


function addArray(array, num) {
    let newarr = []
    for (let i = 0; i < array.length; i++) {
        let result = array[i] + num
        newarr.push(result)
    }
   return console.log(newarr);
}
addArray([1,2,3], 2) /* [3,4,5] */
addArray([1,2,3], 3) /* [4,5,6] */


function addtwoarrays(arr, arr2) {
    let newarr = []
    for (let i = 0; i< arr.length; i++) {
            let add = arr[i] + arr2[i]
            newarr.push(add)
    }
    return console.log(newarr);
}
addtwoarrays([1,1,2], [1,1,3]); /* [2,2,5] */
addtwoarrays([1,2,3], [4,5,6]); /* [5,7,9] */


function countPositive(nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result += 1
        }
    }
    return console.log(result);
}
countPositive([1,-3,5]) /* 2 */
countPositive([-2,3,-5,7,10]) /* 3 */


// challenging exercise

function minMax(nums){
    let min = nums[0]
    let max= nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min){
            min = nums[i]
        }
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return console.log(min, max);
}
minMax([1,-3,5]) /* -3 5 */
minMax([-2,3,-5, 7, 10]) /* -5 10 */

function minMax(nums){
    let min = nums[0]
    let max= nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min){
            min = nums[i]
        }
        if (nums[i] > max) {
            max = nums[i]
        }
    }
    return console.log(min, max);
}
minMax([]) /* undefined undefined */
minMax([3]) /* 3 3*/

function countWords(words) {
    let result = {}
        for (let i = 0; i < words.length; i++) {
            const word = words[i];

            if (!result[word]){
                result[word] = 1
            }else {
                result[word]++
            }
        }
        return console.log(result);
}
countWords(['apple', 'grape', 'apple', 'apple'])
// output is { apple: 3, grape: 1}

const str = ['hello','world','search' , 'good'];
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'search') {
        console.log(i)
    }
}
// 2

const str2 = ['not', 'found'];
let index = -1
for (let i = 0; i < str2.length; i++) {
    if (str2[i] == 'search') {
        index = i
    }
    return console.log(index);
}
//  -1


let words = ['hello', 'world', 'search', 'good', 'search'];
index = -1;

      for (let i = 0; i < words.length; i++) {
        if (words[i] === 'search') {
          index = i;
          // Once we find 'search', immediately exit
          // the loop since we want the index of the
          // first appearance of 'search'.
          break;
        }
      }

      console.log(index);



