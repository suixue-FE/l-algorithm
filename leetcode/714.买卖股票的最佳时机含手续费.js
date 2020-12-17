/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const pLen = prices.length
  let dp = [0,-prices[0]]
  for (let i = 1;i<pLen;i++){
    dp=[Math.max(dp[0],dp[1]+ prices[i]-fee),
      Math.max(dp[0]-prices[i],dp[1])]
  }
  return dp[0]
};
// @lc code=end

