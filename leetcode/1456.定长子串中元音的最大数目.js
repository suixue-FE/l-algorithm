/*
 * @lc app=leetcode.cn id=1456 lang=javascript
 *
 * [1456] 定长子串中元音的最大数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const sLen = s.length
  const obj = {
    a:true, e:true, i:true, o:true, u:true
  };
  let result = 0
  let nowResult = 0
  let i = 0
  while (i<k){
    const sNow = s[i];
    if(obj[sNow]){
      result++
      nowResult++
    } 
    i++
  }
  while(i<sLen){
    const sNow = s[i];
    const pre = s[i - k];
    if(obj[pre]) nowResult--
    if(obj[sNow]) nowResult++
    result = result>nowResult?result:nowResult
    i++
  }
  return result
};
// @lc code=end

