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
// var twoSum = function(nums, target) {
//   let res = {}
//   const leng = nums.length
//   for (let i = 0; i < leng; i++) {
//       let needNum = target - nums[i]
//       if(nums[i] in res){
//         return [res[nums[i]],i]
//       }else{
//         res[needNum] = i
//       } 
//   }
//   return []
// };
var twoSum = function(nums, target) {
  let hashMap = new Map()
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const node = nums[i];
    let ind = hashMap.get(node)
    if (ind!==undefined) return [ind,i]
    hashMap.set(target-node,i)
  }
  return []
}
// @lc code=end

