/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
  let res = -1;
  const len = nums.length
  let add = 0
  // for (let j = 0; j < len;j++) {
  //   add += nums[j] 
  //   if (add>=k) {
  //     res = j+1
  //     break
  //   }
  // }
  // if (res===-1) return res
  for (let i = 0; i < len; i++) {
    add = nums[i]
    if (add>=k) return 1
    for (let j = i+1; j < len; j++) {
      add += nums[j]
      if (add>=k) {
        res = res===-1?j-i+1: Math.min(res,j-i+1)
        break
      }
    }
  }
  return res
};
// @lc code=end

// console.log(shortestSubarray([-28,81,-20,28,-29],89));