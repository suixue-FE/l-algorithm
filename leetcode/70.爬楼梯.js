/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

 // 递归也能算，就是会超时
// var climbStairs = function(n) {
//   if (n==1) {
//     return 1
//   }
//   if (n==2) {
//     return 2
//   }
//   return climbStairs(n-1)+climbStairs(n-2)
// };
var climbStairs = function(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// @lc code=end

