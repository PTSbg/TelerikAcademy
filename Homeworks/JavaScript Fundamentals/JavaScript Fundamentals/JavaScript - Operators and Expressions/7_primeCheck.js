function solve(args) {
var n = parseInt(args[0]);
var isPrime = true;

if (n <= 100 ){
    for (var i = 2; i <= Math.sqrt(n); i+=1){
        if (n % i === 0){
            isPrime = false;
            break;
        }
    }
    if (n === 1 || n < 1){
        isPrime = false;
    }
console.log(isPrime.toString().toLowerCase());
    }
}