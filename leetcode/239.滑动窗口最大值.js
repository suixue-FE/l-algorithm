/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  let result = [],window = []
  for (let i = 0; i < k; i++) {
    const val = nums[i];
    while (window.length&&nums[window[window.length-1]]<val) window.pop()
    window.push(i)
  }
  result.push(nums[window[0]])
  for (let i = k; i < len; i++) {
    const val = nums[i];
    if (i-k === window[0]) window.shift()
    while (window.length&&nums[window[window.length-1]]<val) window.pop()
    window.push(i)
    result.push(nums[window[0]])
  }
  return result
};
// @lc code=end

