/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let caculate = (start) => {       
        let max = 0

        if(start >= prices.length) return 0

        for(let i = start; i < prices.length; i++) {
            let price = 0
            for(let j = i + 1; j < prices.length; j++) {
                if(prices[j] > prices[i]) {
                    let curprice = prices[j] - prices[i] + caculate(j + 1) 
                    price = Math.max(curprice, price)
                }
            }
            max = Math.max(max, price) 
        }

        return max
    }

    return caculate(0)
};