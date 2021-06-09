/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const n = matrix.length
  const middleN = n/2
  for (var i = 0; i < middleN;i++){
   const val =  matrix[i]
   matrix[i] = matrix[n-i-1]
   matrix[n-i-1] = val
  }
  for (var i = 0; i < n;i++){
    for (let j = i+1; j < n; j++) {
      const val =  matrix[i][j]
      matrix[i][j] = matrix[j][i] 
      matrix[j][i] = val
    }
  }
};
// var rotate = function(matrix) {
//   const n = matrix.length
//   let result = []
//   // const arr = []
//   for (var i = 0; i < n;i++){
//     let arr = []
//     for (let j = n-1; j >-1; j--) {
//       arr.push(matrix[j][i])
//     }
//     result.push(arr)
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         matrix[i][j] = result[i][j];
//     }
//   }
//   // return matrix
// };
// @lc code=end

