/*
 * @lc app=leetcode.cn id=837 lang=javascript
 *
 * [837] 新21点
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
// var new21Game = function(N, K, W) {
//   const maxNum = N+W-1
//   if(maxNum<k) return 1
//   let dp = [0]
//   let i =1
//   while(i<=W){
//     dp[i] = 
//   }
// };
var new21Game = function(N, K, W) {
  const dp = [1]
  let count = 0;
 
  for (let i = 1; i < N + 1; i++) {
    if (i - W - 1 >= 0) {
      count -= dp[i - W - 1];
    }
    if (i - 1 < K) {
      count += dp[i - 1]
    }
    dp[i] = count * (1 / W);
  }
  
  let res = 0;
  for (let i = K; i <= N; i++) {
    res += dp[i];
  }
  return res;
 };
// @lc code=end

