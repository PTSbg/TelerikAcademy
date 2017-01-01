function solve (args){
var x = +args[0],
    y = +args[1];

     if (x >= -1000 && x <= 1000 && y >= -1000 && y <= 1000){
                var inCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= 1.5 * 1.5;
                var insideRectangle = (x >= -1) && (x <= (-1 + 6)) && (y <= 1) && (y >= (1 - 6));

                if (inCircle == true && insideRectangle == true){
                    Console.WriteLine("inside circle inside rectangle");
                }
                else if (inCircle == false && insideRectangle == false){
                    Console.WriteLine("outside circle outside rectangle");
                }
                else if (inCircle == true && insideRectangle == false){
                    Console.WriteLine("inside circle outside rectangle");
                }
                else{
                    Console.WriteLine("outside circle inside rectangle");
                }
     }
}