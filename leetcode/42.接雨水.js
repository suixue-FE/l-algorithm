/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//   const len = height.length
//   let result = 0 
//   let leftMax = 0,rightMax = 0
//   for (let i = 0; i < len; i++) {
//     const now = height[i]
//     rightMax = 0
//     for (let j = i+1; j <len;j++){
//       const nowr = height[j]
//       rightMax = rightMax>nowr?rightMax:nowr
//     }
//     const nowRes = Math.min(leftMax,rightMax)-now
//     if (nowRes>0) result+=nowRes
//     leftMax = leftMax>now?leftMax:now
//   }
//   return result
// };
// var trap = function(height) {
//   let stack = [],result = 0
//   const len = height.length
//   for (let i = 0; i < len; i++) {
//     const now = height[i]
//     while(stack.length&&now>height[stack[stack.length-1]]){
//       const topH = stack.pop()
//       if (!stack.length) {
//         break
//       }
//       const topLeftIndex = stack[stack.length-1]
//       // console.log(i,Math.min(height[topLeftIndex],now) - height[topH]);
//       result+= (Math.min(height[topLeftIndex],now) - height[topH])*(i-topLeftIndex-1)
//     }
//     stack.push(i)
//   }
//   return result
// };
// var trap = function(height) {
//   const len = height.length;
//   let result = 0
//   for (let i = 1; i < len-1; i++) {
//     const middle = height[i];
//     let maxLef = 0
//     let maxRight = 0
//     for (let j = 0; j < i; j++) {
//       maxLef = Math.max(maxLef,height[j])
//     }
//     for (let k = i+1; k < len; k++) {
//       maxRight = Math.max(maxRight,height[k])
//     }
//     top = Math.min(maxLef,maxRight)
//     result = top>middle?(result+top-middle) :result
//   }
//   return result
// };
// var trap = function(height) {
//   const len = height.length;
//   let result = 0
//   let leftMax = [height[0]]
//   let rightMax = [height[len - 1]]
//   for (let i = 1; i < len; i++) {
//     leftMax.push(Math.max(leftMax[i-1],height[i-1]))
//   }
//   for (let i = len-2; i >=0; i--) {
//     rightMax.unshift(Math.max(rightMax[0],height[i+1]))
//   }
//   for (let i = 1; i <len; i++) {
//     const top = Math.min(leftMax[i],rightMax[i])
//     if (top>height[i]) {
//       result+=top-height[i]
//     }
//   }
//   return result
// };
var trap = function(height) {
  const len = height.length;
  let res = 0
  let left_max = height[0]
  let right_max = height[len-1]
  let left = 0
  let right = len-1
  while (left <= right){
    left_max = Math.max(left_max,height[left])
    right_max = Math.max(right_max,height[right])
    if(right_max>=left_max){
      res = res+ left_max - height[left]
      left++;
    }else{
      res = res+ right_max-height[right]
      right--
    }
  }
  return res
};
// @lc code=end

