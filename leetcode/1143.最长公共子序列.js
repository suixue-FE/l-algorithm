/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let dp = []
  const len1 = text1.length,len2 = text2.length
  for (let i = 0; i < len1; i++) {
    dp.push(new Array(len2).fill(0))
  }
  // dp[0][0] = text1[0]===text2[0]?1:0
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (i>0&&j>0) {
        if (text1[i]===text2[j]) {
          dp[i][j]=dp[i-1][j-1]+1
        }else{
          dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1])
        }
      }else if (i===0&&j===0) {
        dp[0][0] = text1[0]===text2[0]?1:0
      }else if(i>0){
        dp[i][j] = (dp[i-1][j]||text1[i]===text2[j])?1:0
      }else{
        dp[i][j] = (dp[i][j-1]||text1[i]===text2[j])?1:0
      }
    }
  }
  return dp[len1-1][len2-1]
};
// @lc code=end

console.log(longestCommonSubsequence('mhunuzqrkzsnidwbun','szulspmhwpazoxijwbq'));
