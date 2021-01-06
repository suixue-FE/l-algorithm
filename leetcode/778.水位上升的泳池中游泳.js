/*
 * @lc app=leetcode.cn id=778 lang=javascript
 *
 * [778] 水位上升的泳池中游泳
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  const n = grid.length-1
  let maxVal = 0
  let minVal = grid[0][0]-1
  let arr = []
  for(let i =0;i<=n;i++){
      for(let j =0;j<=n;j++){
      const max = grid[i][j]
      maxVal = max>maxVal?max:maxVal
    }
  }
  function goNext(x,y,resTest){
      const value = grid[x][y]
      if(value<=resTest){
          arr[x][y] = 1
          if(x===n&&y===n)return
          else{
            if(x<n&&arr[x+1][y]===0)goNext(x+1,y,resTest)
            if(y<n&&arr[x][y+1]===0)goNext(x,y+1,resTest) 
            if(x>0&&arr[x-1][y]===0)goNext(x-1,y,resTest)
            if(y>0&&arr[x][y-1]===0)goNext(x,y-1,resTest)
          }
      }
  }
  
  while (minVal<maxVal) {
      const t = (maxVal+minVal)>>1
      arr = new Array(n+1).fill(0).map(item => {
          return new Array(n+1).fill(0)
      })
      goNext(0, 0, t)
      if(arr[n][n]===1) maxVal = t
      else minVal = t+1
  }
  return maxVal
};
// @lc code=end

