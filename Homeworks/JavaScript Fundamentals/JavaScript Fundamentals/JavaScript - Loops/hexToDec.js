'use strict';
function solve (args){
    let hex = +args[0];
    let result = 0;
    let sixTeen = 1;

    for(let i = hex.length - 1; i >= 0; i--){
        let chNow = hex[i];
        if(+chNow >= 0 && +chNow <10){
            result += +chNow * sixTeen;
            sixTeen *= 16;
        }
        else if(chNow == 'A'){
            result +=10 *sixTeen;
            sixTeen *=16;
        }
        else if(chNow == 'B'){
            result += 11* sixTeen;
            sixTeen *= 16;
        }
        else if(chNow == 'C'){
            result += 12 * sixTeen;
            sixTeen *= 16;
        }
        else if(chNow == 'D'){
            result += 13* sixTeen;
            sixTeen *= 16;
        }
        else if(chNow == 'E'){
            result += 14* sixTeen;
            sixTeen *= 16;
        }
        else if (chNow == 'F'){
            result += 15 * sixTeen;
            sixTeen *= 16;
        }
    }
    console.log(result);
}
solve()