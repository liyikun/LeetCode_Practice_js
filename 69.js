/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let r = x
    
    while((r - x / r) > 0.00000001) {
        r = (r + x / r) / 2
    }
    
    return Math.floor(r)
};