let count  = 0

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {

    if(num / 10 === 0){
        count  = 0
    }
    // const newNum =  num / (num % 10) == 0
    console.log(num % 10)
    return count + countDigits(num % 10)
};


console.log(countDigits(121))
