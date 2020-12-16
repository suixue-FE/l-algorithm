/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const arr = s.split(' ')
  const aLen = arr.length
  const pLen = pattern.length
  if(aLen!==pLen) return false
  for (let i = 0; i < aLen; i++) {
    for (let j = 0;j<i;j++){
      if (pattern[i]==pattern[j]&&arr[i]!==arr[j]) return false
      if (pattern[i]!=pattern[j]&&arr[i]==arr[j]) return false
    }
  }
  return true
};
// @lc code=end

