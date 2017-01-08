function solve(args){
     let array = args.map(Number),
         len = array[0],
         arr = array.slice(1),
         mostFrequentNumber = Number.MIN_SAFE_INTEGER,
         mostFrequentNumberCount = 0,
         count = 0;
    
     for(let i = 0; i < len ; i+=1){
         let checkNumber = arr[i];
         for(let j = 0; j < len; j+=1){
             if(checkNumber == arr[j]){
                 count += 1;                 
             }
         }
         if(count > mostFrequentNumberCount){
            mostFrequentNumber = checkNumber;
            mostFrequentNumberCount = count;
         }
         count = 0;
     }

     console.log(mostFrequentNumber + " (" + mostFrequentNumberCount +" times)");
}