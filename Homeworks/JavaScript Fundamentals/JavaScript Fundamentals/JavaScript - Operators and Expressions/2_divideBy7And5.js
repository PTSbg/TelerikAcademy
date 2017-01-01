function solve(args) {
var number = parseInt(args[0]);
if (number % 7 === 0 && number % 5 === 0){
    console.log('true' + " "+ number)
}
else{
    console.log('false' + " "+ number);
}
}