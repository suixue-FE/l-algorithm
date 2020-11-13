/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target,start = 0,end = nums.length-1) {
  if (end<start) return -1
  const middle = Math.floor((start+end)/2);
  if (nums[middle]==target) return middle
  if (nums[middle]>target) return search(nums, target,start,middle-1)
  if (nums[middle]<target) return search(nums, target,middle+1,end)
};
// @lc code=end

