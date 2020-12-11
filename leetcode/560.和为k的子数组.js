/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const len = nums.length
  let sumNum = {0:1}
  let preSum = 0
  let result = 0
  for (let i = 0; i < len; i++) {
    preSum+=nums[i]
    if (sumNum[preSum-k]) {
      result += sumNum[preSum-k]
    }
    sumNum[preSum] = (sumNum[preSum]||0)+1
  }
  return result
};
// @lc code=end

