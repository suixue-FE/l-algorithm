/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 自己写的，应该是O(n^2)的复杂度
// 但是很烦，因为leetcode超时，但是我把案例拿下来跑还是没问题的，确实还是没有思考出更好的解法
// var threeSum11 = function(nums) {
//   const arrLength = nums.length
//   let hash = {}
//   if (arrLength<3) return []
//   let result = []
//   function twoSum(index,sumNum,res){
//     let obj = {}
//     for (let j = index; j < arrLength; j++) {
//       const needNum = sumNum - nums[j];
//       if (nums[j] in obj) {
//         const arr = [...res,nums[j],needNum].sort()
//         if (!hash[arr.toString()]) {
//           result.push(arr)
//           hash[arr.toString()]=true
//         }
//       }else{
//         obj[needNum] = nums[j]
//       }
//     }
//   }
//   for (let i = 0; i < arrLength - 2; i++) {
//       twoSum(i+1,0-nums[i],[nums[i]])
//   }
//   return result
// };
// 看了一眼题解的标题，排序+双指针，试一试
var threeSum = function(nums) {
  const arrLength = nums.length
  if (arrLength<3) return []
  nums.sort((a,b)=>a-b);
  let result=[]
  for (let i = 0; i < arrLength-2; i++) {
    const target = -nums[i]
    if(target<0) break
    if (i > 0 && nums[i] == nums[i - 1]) continue; 
    let start = i+1,end = arrLength-1
    while (start<end){
      if (nums[start]+nums[end]===target) {
        result.push([nums[i],nums[start],nums[end]])
        // 这时候已经成立了，需要一个增大一个减小，那样还有机会
        // 所以首先无论如何先要进行加减操作
        start++
        end--
        // 看看有没有重复的
        
        // 这里简直神奇，原来简写的代码要比不简写的快啊
        // 原来还以为执行起来都一样，只是不炫酷，看来年轻人还是要追求一下炫酷，毕竟炫酷更快
        while (start < end && nums[start]===nums[start-1]) start++
        while (start < end && nums[end]===nums[end+1]) end--
      }
      else if (nums[start]+nums[end] < target) start++
      else end--
      //   while (start < end && nums[start]===nums[start-1]) {
      //     start++
      //   }
      //   while (start < end && nums[end]===nums[end+1]) {
      //     end--
      //   }
      // }else if (nums[start]+nums[end] < target){
      //   start++
      // }else{
      //   end--
      // }
    }
    
  }
  return result
}
// @lc code=end