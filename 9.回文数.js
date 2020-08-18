/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let y = x.toString()
  let middle = Math.floor(y.length/2)
  for (let i = 0; i <=middle; i++) {
    if (y[i]!==y[y.length-i-1]){
        return false
    }
  }
  return true
};
// @lc code=end

