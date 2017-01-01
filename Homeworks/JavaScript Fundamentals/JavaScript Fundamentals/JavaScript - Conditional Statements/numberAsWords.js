function solve(args){ 
    let ones = [' Zero', 'One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine', ' Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'], 
 		tens = [' ', ' ', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'], 
 		ii = 0, 
 		len = args.length, 
 		result = ''; 
 		 
 		for(ii; ii < len; ii+=1){ 
 			if(args[ii] < 20){ 
                 result = ones[args[ii]].trim();
 			} else if((args[ii] % 10) === 0 && args[ii] > 19 && args[ii] < 100){ 
 				result = tens[args[ii]/10].trim(); 
 			} else if((args[ii] % 10) !== 0 && args[ii] > 19 && args[ii] < 100){ 
 				result = tens[Math.floor(args[ii]/10 % 10)] + ones[Math.floor(args[ii]/1 % 10)].toLowerCase(); 
 			} else if((args[ii] % 100) === 0 && args[ii] > 99 && args[ii] < 1000){ 
 				result = ones[args[ii]/100] + ' hundred ';		 
 			} else if((args[ii] % 10) !== 0 && args[ii] > 100 && args[ii] < 1000){ 
 				result = ones[Math.floor(args[ii]/100)] + ' hundred and' + 
 						tens[Math.floor(args[ii]/10 % 10)].toLowerCase() + ones[Math.floor(args[ii]/1 % 10)].toLowerCase(); 
 			} 
 			console.log(result); 
 		} 
};

solve();