/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let nums = 0
  if (prices.length>0) {
    let now = prices[0]
    prices.forEach(value=>{
      if (value>now){
        nums+= value - now 
      }
      now = value
    })
  }
  return nums
};
// @lc code=end

