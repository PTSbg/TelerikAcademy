'use strict';
function solve (args){
    let firstWord = args['fooodsa'];
        secondWord = args['fsdfasf'];

    if (firstWord === secondWord){
        console.log('=');
    }
    else if(firstWord > secondWord){
        console.log('>');
    }
    else if(firstWord < secondWord){
        console.log('<');
    }
}
solve();
