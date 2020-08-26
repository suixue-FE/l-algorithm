/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs&&strs.length===0) {
    return ''
  }
  let result = strs[0]
  // strs.
  for (const str of strs){
    let i = 0
    while(result[i]===str[i]&&i < str.length&&i < result.length){
      i++
    }
    result=result.substr(0,i)
  }
  return result
};

// 下面这个方法感觉过于复杂，效率提升不大
// var longestCommonPrefix = function(strs) {
//   return strs.length===0 ? '' : getSplitArr(strs)
// };
// function getSplitArr(arr){
//   let length = arr.length
//   if (length === 1) {
//     return arr[0]
//   }
//   let middle = Math.floor(arr.length/2),
//    left = arr.slice(0,middle),
//    right = arr.slice(middle,length)
//   return chooseStr(getSplitArr(left),getSplitArr(right))
// }
// function chooseStr(str1,str2) {
//   if (!str1.length||!str2.length) {
//     return ''
//   }
//   let i = 0
//   while(str1[i]===str2[i]&&i < str1.length&&i < str2.length){
//     i++
//   }
//   return str1.substr(0,i)
// }
// @lc code=end

