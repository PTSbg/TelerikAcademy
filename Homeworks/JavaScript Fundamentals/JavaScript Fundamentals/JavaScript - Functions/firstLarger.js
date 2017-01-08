function solve(args) {
    let n = +args[0],
        arr = args[1].split(" ").map(Number),
        result;

    function calculate(array) {
        let condition = false;
        for (let position = 1; position < arr.length - 1; position++) {
            condition = false;

            if (position > 0) {
                if (arr[position] > arr[position - 1]) {
                    condition = true;
                }
            }
            if (position < arr.length - 1) {
                if (arr[position] > arr[position + 1]) {
                    condition = condition && true;
                }
                else {
                    condition = condition && false;
                }
            }
            if (arr.length === 1) {
                condition = false;
            }
            if (condition) {
                return position;
            }
        }

        if (!condition) {
            return -1;
        }

    }
    result = calculate(arr);
    console.log(result);
}