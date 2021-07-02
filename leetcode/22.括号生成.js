/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n===0) return []
  if (n===1) return ['()']
  let result = []
  getStr(n,n,'')
  function getStr(left,right,str) {
    if (left<0||right<0) return
    if (left===0&&right===0) {
      result.push(str);
    }else if(left===right){
      getStr(left-1,right,`${str}(`)
    }else if(left<right){
      getStr(left,right-1,`${str})`)
      getStr(left-1,right,`${str}(`)
    }
  }
  return result
};
// @lc code=end

