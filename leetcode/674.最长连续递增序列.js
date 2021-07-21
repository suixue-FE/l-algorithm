/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let result = 1
  let resNow = 0
  let pre = 0
  for (const num of nums) {
    if (num>pre) {
      resNow++
    }else{
      result = Math.max(resNow,result)
      resNow = 1
    }
    pre = num
  }
  result = Math.max(resNow,result)
  return result
};
// @lc code=end

