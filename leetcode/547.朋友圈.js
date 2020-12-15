 /*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const len = M.length
  let visited = {};
  let result = 0
  let dfs = (node) => {
    for(let j = 0; j < len;j++){
      if(node[j] == 1 && !visited[j]){
          visited[j] = true;
          dfs(M[j]);
      }
    }
  }
  for (let i = 0; i < len;i++){
    if (!visited[i]) {
      dfs(M[i])
      result++
    }
  }
  return result
};
// @lc code=end