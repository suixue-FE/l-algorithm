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
var trap = function(height) {
  let stack = [],result = 0
  const len = height.length
  for (let i = 0; i < len; i++) {
    const now = height[i]
    while(stack.length&&now>height[stack[stack.length-1]]){
      const topH = stack.pop()
      if (!stack.length) {
        break
      }
      const topLeftIndex = stack[stack.length-1]
      // console.log(i,Math.min(height[topLeftIndex],now) - height[topH]);
      result+= (Math.min(height[topLeftIndex],now) - height[topH])*(i-topLeftIndex-1)
    }
    stack.push(i)
  }
  return result
};
// @lc code=end

