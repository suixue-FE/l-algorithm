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
// var lengthOfLongestSubstring = function(s) {
//   const sLen = s.length
//   if (sLen == 0) return 0
//   let result = 0,i=0,j = 0
//   let map = new Map()
//   while (j<sLen) {
//     const element = map.get(s[j])
//     if (element >= i && element <= j) i = element + 1;
//     map.set(s[j],j)
//     result = Math.max(result,j-i+1)
//     j++
//   }
//   return result
// };
var lengthOfLongestSubstring = function(s) {
  const sLen = s.length
  if (sLen == 0) return 0
  let result = 1, map = new Map(), index = 0,j=0
  while(j<sLen){
    const val = s[j]
    const sameVal = map.get(val)
    if (sameVal!==undefined&&sameVal>=index){
      index = sameVal+1 // 滑动窗口左指针
    }
    map.set(val,j)
    result = Math.max(result,j-index+1)
    j++
  }
  return result
};
// var lengthOfLongestSubstring = function(s) {
//   const sLen = s.length
//   if (sLen == 0) return 0
//   let result = 0,i=0,j = 0
//   let map = new Map()
//   while (j<sLen) {
//     const hasBfore = map.get(s[j])
//     if (hasBfore!==undefined&&hasBfore>i) {
//       i = hasBfore+1
//     }
//     map.set(s[j],j)
//     result = Math.max(result,j-i)
//     j++
//   }
//   return result
// };
// @lc code=end
