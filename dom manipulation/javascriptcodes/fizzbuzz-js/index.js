    let num = 30;
    let result = "";
     for (let i = 1; i <= num; i++)  {
        if (i % 3 === 0) result += 'Fizz';
        if (i % 5 === 0) result += 'Buzz';
        if (result == "") result += i;
        console.log(result)
        result = "";
     }





