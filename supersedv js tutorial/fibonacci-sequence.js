
function fibo(n){
    n <= 1 ? n : fibo(n - 1) + fibo(n - 2)
    return n
}
console.log(fibo(5));