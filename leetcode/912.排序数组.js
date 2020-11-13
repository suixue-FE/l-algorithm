/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */
// var sortArray1 = function(nums) {
//   // 这个应该是冒泡排序吧，还是稍稍慢一些的
//   for (let i = 0; i < nums.length; i++){
//     for (let j = i; j < nums.length;j++){
//       if (nums[i]>nums[j]) {
//         let val = nums[i]
//         nums[i] =nums[j]
//         nums[j] = val
//       }
//     }
//   }
//   return nums
// };

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArray(array){
  quickSortAss(array,0,array.length-1)
  return array
}
function quickSortAss(array , start , end){
  if (end<=start) return
  const value = array[start]
  let index = start
  for (let i = start; i <= end; i++) {
    if (array[i]<value) {
      index++
      [array[index],array[i]]=[array[i],array[index]]
    }
  }
  [array[index],array[start]] = [value,array[index]]
  quickSortAss(array, start,index-1)
  quickSortAss(array, index+1,end)
}

// var sortArray = function(nums) {
//   // 快排，明明写过但是下面的交换逻辑还是乱了，重新理了很久
//   findIndex(0,nums.length-1)
//   function findIndex(start,end){
//     if (start>=end) return
//     const value = nums[start];
//     let index = start
//     for (let i = start; i <= end; i++) {
//       if (value>nums[i]) {
//         index++
//         // 这时候 nums[index] 稳定是一个比value大的值，所以可以直接把它换到右边
//         var temp = nums[index];
//         nums[index] = nums[i];
//         nums[i] = temp;
//       }
//     }
//     // 最后，等start右边已经由index分为大小两区
//     // 然后和index换一下，此时index左边都是小的，右边都是大的
//     nums[start] = nums[index]
//     nums[index] = value;
//     findIndex(start,index-1);
//     findIndex(index+1,end);
//   }
//   return nums;
// }
// @lc code=end

