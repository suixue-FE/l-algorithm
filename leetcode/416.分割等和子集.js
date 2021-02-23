/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let all = 0
  let hasVal = []
   nums.forEach((val,index)=>{
    all+=val
    hasVal[index] = false
  })
  // console.log(all);
  if (all%2) return false
  let middle = all/2
  let object = {}
  // console.log(middle);
  const nKen = nums.length
  function getSum(sum,array){
    for (let i = 0; i < nKen; i++) {
      if (array[i]||sum<0) continue
      const element = nums[i];
      sum = sum - element
      array[i] = true
      // console.log(sum==0);
      if (sum==0) return true
      else if (getSum(sum,...[array])) return true
      sum = sum + element
      array[i] = false
      
      }
      return false
    }
  // console.log(getSum(middle,hasVal));
  return getSum(middle,hasVal)
  
};
// @lc code=end

// canPartition([3,3,3,4,5])
// console.log(canPartition([3,3,3,4,5]),'res');