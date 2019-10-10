/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = parseInt(new RegExp(/^\s*[\+\-]?\d+/g).exec(str)) 
    if(isNaN(num)) num = 0
    return Math.max(Math.min(num, Math.pow(2,31) - 1), -Math.pow(2,31)) 
};