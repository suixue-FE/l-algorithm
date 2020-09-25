/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // if (nums.length === 0) return 0;
  let arr = [0,nums[0]]
  const nl = nums.length
  for (let i = 2; i <= nl; i++) {
   arr[i] = Math.max(arr[i-1],arr[i-2]+nums[i-1]) 
  }
  return arr[nl]
};
// @lc code=end

// [] [2] [2,7] [2,7,9] [2,7,9,3] [2,7,9,3,1] [2,7,9,3,1,8]
// 0   2    7     11       11         12           19
//   max(d(i-1),d(i-2)+arr[i-1])   