/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map()
  const numLen = nums.length
  for (let i = 0; i < numLen; i++) {
    const element = nums[i];
    map.get(element)? map.set(element,map.get(element)+1):map.set(element,1)
  }
  let result = Array.from(map)
  result.sort((a,b)=> b[1]-a[1] )
  return result.slice(0,k).map(val=>val[0])
};
// @lc code=end

