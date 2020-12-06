/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const nLen = nums.length
  let result = [[]]
  if (!nLen) return [[]]
  for (let i = 0; i < nLen; i++) {
    const element = nums[i];
    const rLength = result.length
    for (let j = 0; j <rLength;j++){
      result.push(result[j].concat([element]))
    }
  }
  return result
};
// @lc code=end

