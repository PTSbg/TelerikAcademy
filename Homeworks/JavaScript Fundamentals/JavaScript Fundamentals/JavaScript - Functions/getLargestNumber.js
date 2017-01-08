function GetMax(args){
    let arr = args[0].split(' ');
    let max = Math.max.apply(null, arr); 
    console.log(max);
}