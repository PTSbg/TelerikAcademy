'use strict';
function solve (args){
    let number = +args[0];
    let min = number;
    let max = number;
    let sum = number;
    let avg = number;

    for(let i = 1; i < args.length; i++){
        let number = +args[i];
        min = Math.min(min, number);
        max = Math.max(max, number);
        sum = sum + number;
    }
    avg = sum / args.length;
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + avg.toFixed(2));
}