/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let resultArr = [0,0]
  const cLen = cost.length
  for (var i = 2; i <= cLen; i++) {
    resultArr[i] = Math.min(resultArr[i-1]+ cost[i-1],resultArr[i-2]+ cost[i-2])
  }
  return resultArr[cLen]
};
// @lc code=end

