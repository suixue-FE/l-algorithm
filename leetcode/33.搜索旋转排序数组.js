/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l =0,r=nums.length-1
  while(l<=r){
    const mid = (l+r)>>1
    if(target===nums[mid]){
      return mid
    }
    if(nums[mid]>=nums[l]){
      if(nums[l]<=target&&target<nums[mid]) r=mid-1
      else l=mid+1
    }else{
      console.log(nums[mid]<target&&target<=nums[r]);
      if(nums[mid]<target&&target<=nums[r]) l = mid+1
      else r=mid-1
    }
  }
  return -1
};
// @lc code=end

