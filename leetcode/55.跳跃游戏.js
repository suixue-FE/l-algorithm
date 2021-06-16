/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//   // console.log(nums);
//   const len = nums.length-1
//   if (len===0) return true
//   for (var i = 0; i < len;i++){
//     if (nums[i]>=len-i) {
//       if (canJump(nums.slice(0,i+1))) return true
//     }
//   }
//   return false
// };
var canJump = function(nums) {
  const len = nums.length - 1
  if (len === 0) return true
  let maxLen = nums[0]
  if (len===0) return true
  for (var i = 0; i <= len;i++){
    if (maxLen>=len) return true
    if (maxLen<i) return false
    maxLen = maxLen>i+nums[i]?maxLen:i+nums[i]
  }
  return false
};
// @lc code=end
