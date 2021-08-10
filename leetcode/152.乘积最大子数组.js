/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     let max = nums[0]
//     const len = nums.length
//     for (let i = 0; i < len; i++) {
//         let now = 1
//         for (let j = i; j < len; j++) {
//             const element = nums[j]; 
//             now = now*element
//             max = Math.max(max,now)
//         }
//     }
//     return max
// };
var maxProduct = function(nums) {
    let res = nums[0]
    let min = nums[0]
    let max = nums[0]
    const len = nums.length
    for (let i = 1; i < len; i++) {
        const minBefore = min
        const num = nums[i]
        min = Math.min(minBefore*num,max*num,num)
        max = Math.max(minBefore*num,max*num,num)
        res = Math.max(res,max)
    }
    return res
};
// @lc code=end

