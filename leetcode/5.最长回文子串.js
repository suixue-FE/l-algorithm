/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (len===1) return s
  let dp = [],start = len-1,result = s[0]
  while(start>-1){
    dp[start] = []
    let end = start
    while(end < len){
      if (start === end)  dp[start][end] = true
      else if (s[start]===s[end]){
        if(end-start<3) dp[start][end] = true;
        else if (dp[start+1][end-1]) dp[start][end]= true
      }
      if (dp[start][end]&&end-start+1>result.length) result = s.slice(start,end+1)
      end++
    }
    start--
  }
  return result
};
// @lc code=end


// 回文字符串，重点在于 ababa 是回文字符串的话，那注定 切除两边后 bab 也是回文字符串
// 所以我们用动态规划，设定 dp[i][j] = (s[i]===s[j]&&dp[i+1][j-1])
// 这里和我之前做的不一样的点在于，之前动态规划都是从下往上直接走，但是这次dp[i+1][j-1]
// 所以i要从后往前走，j要从前往后走，才能确保 计算到dp[i][j]时，dp[i+1][j-1]已经计算过。