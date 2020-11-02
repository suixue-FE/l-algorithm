/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const len1 = nums1.length,len2 = nums2.length
  const shortSet = new Set(len1>len2?nums2:nums1),longSet = new Set(len1>len2?nums1:nums2)
  shortSet.forEach(value=>{
    if (!longSet.has(value)) shortSet.delete(value)
  })
  return Array.from(shortSet)
};
// @lc code=end

