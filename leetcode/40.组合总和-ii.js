/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a,b) => a-b)
  let result = [],clen = candidates.length 
  const dfs=(arr,remain,index)=>{
    if (remain<0) return
    if (remain==0) {
      result.push(arr)
      return
    }
    let prev = null
    while (index<clen){
      const node = candidates[index]
      if (prev!==node) {
        if (remain-node>=0){
          arr.push(node)
          dfs([...arr],remain-node,index+1)
          arr.pop()
        }
      }
      prev = node
      index++
    }
  }
  dfs([],target,0)
  return result
};
// @lc code=end

