function solve(args) {
    String.prototype.format = function (options) {
        let prop,
            result = this;
        for (prop in options) {
            result = result.replace(new RegExp('#{' + prop + '}', 'g'), options[prop]);
        }
        return result;
    };

    let options = JSON.parse(args[0]);
    result = args[1].format(options);

    console.log(result);
}

solve([
    '{ "name": "John", "age": 13 }',
    "My name is #{name} and I am #{age}-years-old"
]);