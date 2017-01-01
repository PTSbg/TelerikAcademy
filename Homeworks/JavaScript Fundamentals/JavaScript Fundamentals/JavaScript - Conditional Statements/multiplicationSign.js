'use strict';

function solve(args) {
    let numberOne = +args[0],
        numberTwo = +args[1];
        numberThree = +args[2];

        const multiplication = numberOne * numberTwo * numberThree;

        if (multiplication > 0 ){

            console.log('+');
        }
        else if (multiplication === 0){
            console.log('0');
        }
        else{
            console.log('-');
        }
}