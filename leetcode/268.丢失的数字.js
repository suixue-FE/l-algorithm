/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//   const n = nums.length
//   const sum = nums.reduce((pre,val)=>{
//     return pre+val
//   },0)
//   const addAll = Number.isInteger(n/2) ? (n/2)+(n*n/2) : Math.ceil(n/2)*n
//   return addAll-sum
// };
// 看不懂，也不太会
// var missingNumber = function(nums) {
//   const n = nums.length
//   let res = n
//   for (let i = 0; i < n; i++){
//     res ^= nums[i]
//     res ^= i
//   }
// return res;
// };
// @lc code=end

