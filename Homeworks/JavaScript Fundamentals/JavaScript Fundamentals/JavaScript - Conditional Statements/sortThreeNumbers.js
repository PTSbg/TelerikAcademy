function solve (args){
 	let a = +args[0],
  		b = +args[1],
  		c = +args[2];
const sortThreeNums = function (a,b,c) {
  if (a >= b && a >= c) {
		if (b >= c) return a+' '+b+' '+c;
		else return a+' '+c+' '+b;
	}
	else if (b >= c) {
		if (a >= c) return b+' '+a+' '+c;
		else return b+' '+c+' '+a;
	}
	else {
		if (b >= a) return c+' '+b+' '+a;
		else return c+' '+a+' '+b;
	}	
};
for (var i = 0; i < aNums.length; i+=1) {
	console.log(sortThreeNums(aNums[i],bNums[i],cNums[i]));
}
}