function solve(args) {
    Array.prototype.removeAll = function (target) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] === target) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    };
    var inputArray = args.removeAll(args[0]);
    inputArray.forEach(function (item) {
        console.log(arr.join("\r\n"));
    })
