/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length
  let pre = 0, maxAns = nums[0]
  // maxNow = []
  for (let i = 0; i < len; i++) {
    
    const x = nums[i]
    pre = Math.max(pre + x, x);
    // maxNow[i] =  pre
    maxAns = Math.max(maxAns, pre);
  }
  // console.log(maxNow);
  
  return maxAns
};
// @lc code=end

