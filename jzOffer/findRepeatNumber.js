// 查找数组中的重复数字
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  const len = nums.length
  let obj = {}
  for(let i = 0;i<len;i++){
      const num = nums[i]
      if(obj[num]){
          return num
      }
      obj[num] = true
  }
};