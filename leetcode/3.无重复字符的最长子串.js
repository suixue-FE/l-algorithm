/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const sLen = s.length
  if (sLen == 0) return 0
  let result = 0,i=0,j = 0
  let map = new Map()
  while (j<sLen) {
    const element = map.get(s[j])
    if (element >= i && element <= j) i = element + 1;
    map.set(s[j],j)
    result = Math.max(result,j-i+1)
    j++
  }
  return result
};
// @lc code=end

