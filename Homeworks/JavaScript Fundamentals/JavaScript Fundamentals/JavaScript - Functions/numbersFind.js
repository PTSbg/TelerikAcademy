function solve(args) {
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
