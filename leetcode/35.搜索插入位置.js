/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const len = nums.length
  if (len == 0) return 0
  let l=0,r=len
  while (l<r){
    if (r-l==1) return nums[l]>=target?l:r
    let middle = Math.floor((l+r)/2)
    if (nums[middle]==target) return middle
    if (nums[middle]>target) r=middle  
    if (nums[middle]<target) l=middle  
  }
  return nums[l]>=target?l:l+1
};
// @lc code=end

