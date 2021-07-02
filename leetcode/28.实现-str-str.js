/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0
  const hLen = haystack.length
  const nLen = needle.length
  if (hLen<nLen) return -1
  const chart = hLen - nLen
  for (let index = 0; index <= chart; index++) {
    if(isSame(needle,haystack.slice(index,index+nLen))){
      return index
    }
  }
  return -1
};
isSame=(str1,str2)=>{
  console.log(str1,str2);
  const sLen = str1.length
  for (let i = 0; i < sLen; i++) {
    if (str2[i]!==str1[i]) return false
  }
  return true
}
// @lc code=end

