/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // const cLen = candidates.length
  let result = [];
  const dfs = (arr,remain,index)=>{
    if (remain < 0) return;

    if (remain === 0) {
        result.push(arr);
        return;
    }
    while(index<candidates.length) {
      const node = candidates[index]
      if (node<=remain){
        arr.push(node)
        dfs([...arr],remain-node,index)
        arr.pop();
      }
      index++
    }
  }
  dfs([],target,0)
  return result
};
// @lc code=end

