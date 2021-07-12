// 将数组排序，使输出的字符串最小
/**
 * @param {number[]} nums
 * @return {string}
 */
 var minNumber = function(nums) {
  const sortFun = function(num1,num2){
      const num12 = `${num1}${num2}` 
      const num21 = `${num2}${num1}`
      const len = num12.length
      for(let i = 0;i<len;i++){
          if(num12[i]!==num21[i]){
              return num12[i]-num21[i]
          }
      } 
  }
  return nums.sort(sortFun).join('')
};