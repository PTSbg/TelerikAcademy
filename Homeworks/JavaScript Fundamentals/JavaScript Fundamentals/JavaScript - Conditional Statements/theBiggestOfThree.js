'use strict';

function solve(args) {
    let a = +args[0],
        b = +args[1],
        c = +args[2];

    const biggestNumber = a;

            if (b > a)
            {
                biggestNumber = b;
            }
            if (c > b && c > a)
            {
                biggestNumber = c;
            }
    console.log(biggestNumber);
}
