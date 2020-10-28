/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let map = new Map(),set = new Set()
  arr.forEach(val=>{
    map.set(val,(map.get(val)||0)+1)
  })
  for (let [key, value] of map) {
    if (set.has(value)) return false
    set.add(value)
  }
  return true
};
// @lc code=end

