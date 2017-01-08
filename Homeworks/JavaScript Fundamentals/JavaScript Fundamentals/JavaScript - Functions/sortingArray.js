function solve(args) {
    var len = args[0],
        array = args[1].split(' ').map(Number),
        result = sortArray();

    function maximalElement(startIndex) {

        var indexMax,
            maxElement = -Infinity;
        array.splice(0, startIndex);

        for (var i = startIndex; i < len; i += 1) {
            if (maxElement < array[i]) {
                maxElement = array[i];
                indexMax = i;
            }
        }
        array[indexMax] = -Infinity;
        return maxElement;
    }

    function sortArray() {
        var sortedArray = [];
        for (var index = 0; index < len; index += 1) {
            sortedArray.unshift(maximalElement(0));
        }
        return sortedArray;
    }

    console.log(result.join(' '));
}