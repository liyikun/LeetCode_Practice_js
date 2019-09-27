/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    if(prices.length < 2) return 0

    let price = 0

    for(let i = 1; i < prices.length; i++) {
        let cur = prices[i] - prices[i - 1]
        if(cur > 0) {
            price += cur
        }
    }
    
    return price
};