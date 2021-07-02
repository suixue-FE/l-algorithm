/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a,b)=>a[0]-b[0])
  let result = [intervals[0]]
  const len = intervals.length
  for (let i = 1; i < len; i++) {
    const arr = intervals[i];
    if (arr[0]>result[result.length-1][1]) {
      result.push(arr)
    }else{
      result[result.length-1] = 
      [result[result.length-1][0],
      Math.max(result[result.length-1][1],arr[1])]
    }
  }
  return result
};
// @lc code=end

