'use strict';
function solve() {
 
    function isPrime(number) {
 
        for (let i = 2; i < number; i += 1) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
 
    return function findPrimes(start, end) {
 
        if (start == null || end == null) {
            throw '';
        } else if (isNaN(start) || isNaN(end)) {
            throw '';
        } else {
            let array = [];
 
            for (let i = +start; i <= +end; i += 1) {
                if (i != 0 && i != 1) {
                        array.push(i);
                    }
                }
            }
 
            return array;
        }
    }

module.exports = solve;