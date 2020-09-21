/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 贪心算法不合适，按照贪心算法就是从上到下，每一步都是最当前步骤最优解
// 但是这样容易到最后一步出一个巨大的数字。所以用动态规划
// 从下到上，每一步都是全局最优解
var minimumTotal = function(triangle) {
  // const len = triangle.length-1
  let tmp = triangle[triangle.length-1]
  for (let index = triangle.length-2; index >= 0; index--) {
    for (let j = 0; j < triangle[index].length; j++) {
      tmp[j]=triangle[index][j]+Math.min(tmp[j],tmp[j+1])
    }
  }
  return tmp[0]
};
// @lc code=end

