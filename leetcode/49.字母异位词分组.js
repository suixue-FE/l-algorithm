/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  let isSame = function (str1, str2) {
//   const len1 = str1.length ,len2 = str2.length
//   if (len1!==len2) return false
//   for (let i = 0; i < len1; i++) {
//     const letter = str1[i];
//     const index = str2.indexOf(letter)
//     if (index<0) return false
//     str2 = `${str2.slice(0, index)}${str2.slice(index+1)}`
//     // console.log(str2);
//   }
//   return true
// }
// var groupAnagrams = function(strs) {
//   let result = [];
//   const len = strs.length
//   for (let i = 0; i < len; i++) {
//     const element = strs[i];
//     const resLen = result.length
//     let isPush = false
//     for (let j = 0; j < resLen; j++) {
//       const strIn = result[j][0];
//       if (isSame(element,strIn)) {
//         result[j].push(element)
//         isPush = true
//         break
//       }
//     }
//     if (!isPush) result.push([element])
//   }
//   return result
// };
var groupAnagrams = function(strs) {
  let map = new Map();
  strs.forEach(str => {
    const key = Array.from(str).sort().join()
    if (map.has(key)) {
      map.get(key).push(str)
    }else{
      map.set(key,[str])
    }
  })
  // console.log(map.values());
  return [...map.values()]
}
// @lc code=end

