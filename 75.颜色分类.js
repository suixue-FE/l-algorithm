/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//   if (nums.length===0) return nums
//   let obj={'0':0,'1':0,'2':0}
//   for (const iterator of nums) {
//     obj[iterator]++
//   }
//   for(let i=0; i<nums.length;i++){
//     if(i<obj[0])nums[i] = 0
//     else if(i<obj[1]+obj[0]) nums[i] = 1
//     else nums[i] = 2
//   }
// };
var sortColors = function(nums) {
  if (nums.length===0) return nums
  let index=0,left = 0,right = nums.length-1
  while(index <= right){
    if (nums[index]==2) {
      [nums[index],nums[right]]=[nums[right],nums[index]]
      right--
      continue
    }
    if (nums[index]==0) {
      [nums[index],nums[left]]=[nums[left],nums[index]]
      left++
      index++
      continue
    }
    else index++
  }
}
// @lc code=end

