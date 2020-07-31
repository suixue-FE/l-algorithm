/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let res = {}
  const leng = nums.length
  for (let i = 0; i < leng; i++) {
      let needNum = target - nums[i]
      if(nums[i] in res){
        return [res[nums[i]],i]
      }else{
        res[needNum] = i
      } 
  }
  return []
};
// @lc code=end

