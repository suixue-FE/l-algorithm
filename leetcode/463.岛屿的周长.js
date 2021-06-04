/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var islandPerimeter = function(grid) {
//   if (grid.length==0) return 0
//   let marksSet = new Set(),len = 0
//   function def(i,j){
//     if (marksSet.has(`${i}-${j}`)) return
//     len+=4
//     marksSet.add(`${i}-${j}`)
//     if (i > 0 && grid[i - 1][j] != 0) len-=2
//     if (j > 0 && grid[i][j - 1] != 0) len-=2
//   }
//   for(let i in grid){
//     const gi = grid[i]
//     for(let j in gi){
//       if (gi[j]===1) def(i,j)
//     }
//   }
//   return len
// };

// 上面不太行，速度慢。下面我们来套一下dfs套路
// var islandPerimeter = function(grid) {
//   if (grid.length==0) return 0
//   let marksSet = new Set(),m = grid.length,n= grid[0].length
//   function dfs(i,j){
//     if (marksSet.has(`${i}-${j}`) || i<0 || j<0 || i >= m || j >= n || grid[i][j] != 1) return 0
//     marksSet.add(`${i}-${j}`)
//     let ans = dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 4
//     if (i > 0 && grid[i - 1][j] != 0) ans-=2
//     if (j > 0 && grid[i][j - 1] != 0) ans-=2
//     return ans
//   }
//   for(let i = 0; i < m ;i++){
//     for(let j = 0; j < n ;j++){
//       if (grid[i][j]===1) return dfs(i,j)
//     }
//   }
// };
// var islandPerimeter = function(grid) {
//   if (grid.length==0) return 0
//   const m = grid.length,n= grid[0].length
//   function dfs(i,j){
//     if (i<0 || j<0 || i >= m || j >= n || grid[i][j] != 1) return 0
//     grid[i][j] = -1
//     let ans = dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) + 4
//     if (i > 0 && grid[i - 1][j] != 0) ans-=2
//     if (j > 0 && grid[i][j - 1] != 0) ans-=2
//     return ans
//   }
//   for(let i = 0; i < m ;i++){
//     for(let j = 0; j < n ;j++){
//       if (grid[i][j]===1) return dfs(i,j)
//     }
//   }
// };
var islandPerimeter = function(grid) {
  const l = grid.length,jl =  grid[0].length
  let grid2 = new Set()
  function dfs(i,j,len,jen) {
    if(grid2.has(`${i}-${j}`)) return 0
    if (i>len||j>jen) return 0
    let res = 0
    if (grid[i][j]){
      res = 4
      if (i > 0 && grid[i - 1][j] != 0) res-=2
      if (j > 0 && grid[i][j - 1] != 0) res-=2
    }
    grid2.add(`${i}-${j}`)
    return res + dfs(i+1,j,len,jen) + dfs(i,j+1,len,jen)
  }
  return dfs(0,0,l-1,jl-1)
}
// @lc code=end

