function solve(args) {
    let a = +args[0],
        b = +args[1];
        c = +args[2];
            let x1;
			let x2;
			let determinant;
			if (isNaN(a) || isNaN(b) || isNaN(c))
			{
			    console.log("a, b, c must be a number");
			}
			else
			{
			    console.log("");
			    if (a != 0) {
			        determinant = b * b - 4 * a * c;
			        if (determinant > 0) {
			            x1 = (-b + Math.sqrt(determinant)) / (2 * a);
			            x2 = (-b - Math.sqrt(determinant)) / (2 * a);
			            console.log("x1=" + x2.toFixed(2) + "; x2=" + x1.toFixed(2));
			        }
			        if (determinant == 0) {
			            x1 = -(b / (2 * a));
			            console.log("x1=x2=" + x1.toFixed(2));
			        }
			        if (determinant < 0) {
			            console.log("no real roots");
			        }
			    }
			    else if(b != 0)
				{
			        x1 = (-c) / b;
			        console.log("x1=x2=" + x1.toFixed(2));
			    }
				else
				{
					console.log("No quadratic equation");
				}
			}
}