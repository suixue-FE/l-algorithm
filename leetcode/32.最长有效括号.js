/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const sLen = s.length
  let stark = [-1],result = 0
  for (let i = 0; i < sLen; i++) {
    const item = s[i];
    if (item=='('){
      stark.push(i)
    }
    if (item == ')') {
      stark.pop()
      if (stark.length) {
        result = Math.max(result,i-stark[stark.length-1])
      }else {
        stark.push(i)
      }
    }
  }
  // result = Math.max(result,now)
  return result
};
// @lc code=end

