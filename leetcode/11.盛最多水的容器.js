/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea1 = function(height) {
//   // 两条边中短的一条，乘上两条边的距离
//   let res = 0
//   for (let key = 0; key < height.length; key++) {
//     const leftLine = height[key]
//     for (let i = key+1; i < height.length; i++) {
//       const leftLine2 = height[i];
//       const line = leftLine>leftLine2?leftLine2:leftLine
//       const result = line*(i - key)
//       res = res>result?res:result
//     }
//   }
//   return res
//   // 一个丑陋的双层循环，我就知道会倒数，但是实在是抽象不出问题的核心和关键。
// };
var maxArea = function(height) {
  // 两条边中短的一条，乘上两条边的距离

  // 还是双指针厉害啊，官方题解教导我们说：
  // 左右作为边界取两个指针。较大的指针向内移动，面积只能变得更小，没有意义
  // 此时将较小的指针向内移动才有可能会变大。每次移动后都当成一个新的数组对待，重复上一过程即可
  let res = 0,pre = 0,last = height.length-1
  while (pre<last){
    const preLine = height[pre],lastLine = height[last] 
    let result
    if (preLine>lastLine) {
      result = lastLine*(last - pre)
      last--
    }else{
      result = preLine*(last - pre)
      pre++
    }
    res = res>result?res:result
  }
  return res
};
// @lc code=end

