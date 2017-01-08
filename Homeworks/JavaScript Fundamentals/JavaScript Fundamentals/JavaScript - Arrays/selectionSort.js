function sortArray(arr) {
    arr.splice(0,1);
    let helper;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (+arr[j] < +arr[i]) {
                helper = +arr[i];
                arr[i] = +arr[j];
                arr[j] = helper;
            }
        }
        console.log(arr[i]);
    }
}