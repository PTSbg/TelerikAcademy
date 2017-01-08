function solve(args) {
    let n = +args[0],
        arr = args[1].split(" ").map(Number),
        result;

    function calculate(array) {
        let result = 0;
        for (let i = 0; i < n; i++) {
            if (i === 0 || i === n - 1) {
                continue;
            }
            else if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
                result++;
            }
        }
        return result;
    }

    result = calculate(arr);
    console.log(result);
}