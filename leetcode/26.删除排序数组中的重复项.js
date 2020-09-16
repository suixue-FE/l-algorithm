/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length===0) return 0
  // 糊里糊涂的写出来了，交换部分是正好昨天做了快排，用到了交换
  // 看了一下题解，人家这叫双指针，。但是我个人感觉应该算是双指针的变种
  // 我想叫他真假指针或者叫输入/结果指针，都好，index是结果的位置，是真的，i是正在循环的位置，算假的
  let index = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i]!==nums[index]) {
      index++
      const indexTrueVal = nums[i]
      nums[i] = nums[index]
      nums[index] = indexTrueVal
    }
  }
  return index+1
};
// @lc code=end

