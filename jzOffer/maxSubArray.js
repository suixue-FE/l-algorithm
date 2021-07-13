
//输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n)。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = [nums[0]]
    let maxNow = nums[0]
    for(let i=1;i< nums.length;i++){
        res[i]=res[i-1]>0?res[i-1]+nums[i]:nums[i]
        maxNow = Math.max(maxNow,res[i])
    }
    return maxNow
};