/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let result = [];
  const dlength = digits.length
  if (dlength===0) return result
  const obj = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }
  function getStr(index,mubiaoStr) {
    const nowStr = obj[digits[index]]
    if (index===dlength-1) {
      for (let j = 0; j < nowStr.length; j++) {
        mubiaoStr += nowStr[j]
        result.push(mubiaoStr)
        mubiaoStr=mubiaoStr.substr(0,mubiaoStr.length-1)
      }
    }else{
      for (let j = 0; j < nowStr.length; j++) {
        mubiaoStr += nowStr[j]
        getStr(index+1,mubiaoStr)
        mubiaoStr=mubiaoStr.substr(0,mubiaoStr.length-1)
      }
    }
  }
  getStr(0,'')
  return result
};
// @lc code=end

