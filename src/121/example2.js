/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let price = 0
    for(let i = 0; i < prices.length; i++) {
        for(let j = i; j >= 0; j--) {
            price = Math.max(prices[i] - prices[j], price)
        }
    }

    return price
};