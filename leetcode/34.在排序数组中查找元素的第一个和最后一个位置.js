/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
          right = mid - 1;
          ans = mid;
      } else {
          left = mid + 1;
      }
  }
  return ans;
}

var searchRange = function(nums, target) {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
      ans = [leftIdx, rightIdx];
  } 
  return ans;
};

// var searchRange = function(nums, target) {
//   const nlen = nums.length
//   if (nlen==0) return [-1,-1]
//   let l = 0 ,lr=0 ,r = nlen-1, rr = nlen-1,ml =0, rl = 0,lresult=0,rreslut=0
//   while (l<=r){
//     ml = Math.floor((l+r)/2)
//     if (nums[ml]>=target){
//       r = ml-1
//       lresult = ml
//     } 
//     else l = ml+1
//   }
//   while (lr<=rr){
//     rl = Math.floor((lr+rr)/2)
//     if (nums[rl]>target){
//       rr = rl-1
//       rreslut = rl
//     } 
//     else lr = rl+1
//   }
//   let ans = [-1, -1];
//   const leftIdx = lresult;
//   const rightIdx = rreslut-1;
//   if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
//       ans = [leftIdx, rightIdx];
//   } 
//   return ans;
//   // if(lresult>rreslut-1)return [-1,-1]
//   // return [lresult,rreslut-1]
// };
// @lc code=end

