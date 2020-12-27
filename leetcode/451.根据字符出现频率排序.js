/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const sLen = s.length
  if (sLen<=1) return s
  let obj = new Map()
  for (let i = 0; i < sLen; i++) {
    const e = s[i];
    obj.set(e,obj.get(e)?obj.get(e)+1:1)  
  }
  let array = [...obj].sort((a,b)=>b[1]-a[1])
  let result = array.reduce((prev,value)=>{
    return prev + value[0].repeat(value[1])
  },'')
  return result
};
// @lc code=end

