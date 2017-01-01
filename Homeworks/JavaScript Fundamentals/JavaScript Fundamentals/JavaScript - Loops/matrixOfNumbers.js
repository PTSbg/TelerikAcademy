'use strict';
function solve (args){
    let n = +args[0];
    let row = '';

    for(let i = 1; i <= n; i++){
        for(let j = i; j <= n + (i-1); j++){
            row += j + ' ';
        }
            console.log(row);
            row = '';
    }
}
solve()