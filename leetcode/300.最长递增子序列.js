/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const len = nums.length
  if (!len) return 0
  let maxArr = [1]
  for (let i = 1; i < len; i++) {
    const element = nums[i];
    let nowMax = 1
    for (let j = 0; j < maxArr.length; j++) {
      const res = maxArr[j];
      if (element>nums[j]) {
        nowMax = Math.max(nowMax,res+1)
      }
    }
    maxArr.push(nowMax)
  }
  const maxArrLen =  maxArr.length
  let result = 1
  for (let i = 0; i < maxArrLen; i++) {
    const e = maxArr[i];
    // console.log(e,result);
    result = Math.max(result,e)
  }
  return result
};
// @lc code=end

