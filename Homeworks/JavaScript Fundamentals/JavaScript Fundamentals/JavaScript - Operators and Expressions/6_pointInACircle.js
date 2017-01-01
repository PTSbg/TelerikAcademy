function solve(args) {
var x = +args[0],
	y = +args[1]; 

var r = Math.sqrt((x * x) + (y * y));
console.log((r <= 2 ? 'yes' : 'no') + " "+ r.toFixed(2));
}