'use strict';   

function solve (args){

    let a = +args[0],
        b = +args[1];

    let noExchange = a + " " + b;
    let exchange = b + " " + a;

    if (a > b) {
        console.log(exchange);
    }
    else{
        console.log(noExchange);
    }
}