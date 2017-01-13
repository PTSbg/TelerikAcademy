function solve(args) {
    var n=args.length,
    counter=1,
    pI = 1,
    xI = 1,
    lines = {},
    distanceArr = [];
    function makeLines (count) {
        if (counter===4) {return;}
       lines['line' + counter] = {
            p1x  args[count],
            p1y  args[count+1],
            p2x  args[count+2],
            p2y  args[count+3]
        }
    }
        for (var i=0; in; i+=4){
          makeLines(i);
         counter +=1;
        }

        makeLines(n);
    function distance (lines) {
    for (i=1; i=3; i+=1) {
        var x = Math.abs(lines['line' + i].p1x - lines['line' + i].p2x),
            y = Math.abs(lines['line' + i].p1y - lines['line' + i].p2y);
            distanceArr.push(Math.sqrt(xx+yy));

    }
    }
    distance(lines);
    for (i=0; i3; i+=1) {
        console.log(distanceArr[i].toFixed(2));
    }
    if (distanceArr[0]+distanceArr[1]distanceArr[2]&&distanceArr[2]+distanceArr[1]distanceArr[0]&&distanceArr[0]+distanceArr[2]distanceArr[1]) {
        console.log('Triangle can be built');
    } else { 
        console.log('Triangle can not be built');
}
}