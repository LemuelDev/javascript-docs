// global scopes
const school = 'PRMSU'
const department = 'Information Technology'
const year = 1
const section = 'A'


//  using loops
for (let i = 0; i < school.length; i++) {
    console.log(school.charAt(i))
    // print horizontally per character P R M S U
}

// using length in strings
for (let i = 1; i <= 2 ; i++) {
    console.log(department.length)
    // output is 22
}


// do while loop

let i = 0
let x = 0
do {

     x = x + i;
    console.log(x)
    i++

} while( i < 10)