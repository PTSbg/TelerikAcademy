'use strict';
function solve (args){
    let array = args.map(Number),
        len = array.length,
        temp = 1,
        result = 1;

    for(let i = 2; i < len; i++){
        if(array[i] > array[i - 1]){
            temp++;
            if(temp > result){
                result = temp;
            }
        }else{
            temp = 1;
        }
    }
    console.log(result);
}