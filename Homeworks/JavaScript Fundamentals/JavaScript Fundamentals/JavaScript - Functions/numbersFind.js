function test(args) {
    let n = +args[0];
    let numbersArr = args[1].split(' ');
    let numberToFind = +args[2];

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (numberToFind == numbersArr[i]) {
            count++;
        }
    }

    console.log(count);
}

test([6, "1 2 3 4 5 6", 3]);
