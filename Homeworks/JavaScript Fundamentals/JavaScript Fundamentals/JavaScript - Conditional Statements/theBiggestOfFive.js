function solve(args) {
    let a = +args[0],
        b = +args[1],
        c = +args[2],
        d = +args[3],
        e = +args[4];

    const biggestNumber = a;

            if (b > a)
            {
                biggestNumber = b;
                if (c > b && c > a)
            {
                biggestNumber = c;
                if (d > c && d > b && d > a){

                biggestNumber = d;

                if (e > d && e > c && e > b && e > a){

                biggestNumber = e;
                }
                }
            }
            }
            console.log(biggestNumber);
}
