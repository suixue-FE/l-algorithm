/*
 * @lc app=leetcode.cn id=688 lang=javascript
 *
 * [688] “马”在棋盘上的概率
 */

// @lc code=start
/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
  let dp=[]
  for (let i = 0; i <= K; i++) {
    const arr = []
    for (var j = 0; j <N;j++){
      arr.push(new Array(N).fill(false));
    }
    dp.push(arr)
  }
  const arr = [[1,2],[-1,2],[1,-2],[-1,-2],
  [2,1],[2,-1],[-2,-1],[-2,1]]
  // console.log(dp);
  function getNowGL(x,y,i){
    if(i===K) return 1
    // console.log(i,x,y);

    if(dp[i][x][y]!==false){
      return dp[i][x][y]
    }
    let res = 0
    for (var j = 0; j<8;j++){
        const val = arr[j]
        const nextX = x+val[0]
        const nextY = y+val[1]
        if(0<=nextX&&nextX<N&&0<=nextY&&nextY<N){
          res += 0.125*getNowGL(nextX,nextY,i+1)
        }
      }
      dp[i][x][y] = res
      return res
  }
  return getNowGL(r,c,0)
};
// @lc code=end

