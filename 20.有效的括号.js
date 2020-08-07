/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let stack = []
  let obj = {
    "(":")",
    "[":"]",
    "{":"}"
  }
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    if (element in obj) {
      stack.push(element)
    }else{
      // let pop = obj[stack.pop()]
      if (element!== obj[stack.pop()]) {
        return false
      }
    }
  }
  return !stack.length
};
// @lc code=end

