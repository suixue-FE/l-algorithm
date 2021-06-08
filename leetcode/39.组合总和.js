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
  const len = candidates.length
  const result = [];
  function getVal(tar,nowArr,indexNow){
    if (tar<0) return
    if (tar===0) {
      result.push(nowArr)
      return
    }
    for (let i = indexNow; i < len; i++) {
      getVal(tar-candidates[i],[...nowArr,candidates[i]],i)
    }
  }
  getVal(target,[],0)
  return result
};
// var combinationSum = function(candidates, target) {
//   // const cLen = candidates.length
//   let result = [];
//   const dfs = (arr,remain,index)=>{
//     if (remain < 0) return;

//     if (remain === 0) {
//         result.push(arr);
//         return;
//     }
//     while(index<candidates.length) {
//       const node = candidates[index]
//       if (node<=remain){
//         arr.push(node)
//         dfs([...arr],remain-node,index)
//         arr.pop();
//       }
//       index++
//     }
//   }
//   dfs([],target,0)
//   return result
// };
// @lc code=end

