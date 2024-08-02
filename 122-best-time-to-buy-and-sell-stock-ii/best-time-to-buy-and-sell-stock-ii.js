/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) { //if the current price is higher than yesterday
            // buy at yesterdays price and sell at todays price
            // aka:
            // yesterdays price: 3
            // todays price: 5
            // we buy at 3, and sell at 5. Profit: 5 - 3 = 2.
            profit += prices[i] - prices[i - 1]; 
        }
    }
    
    return profit;
};