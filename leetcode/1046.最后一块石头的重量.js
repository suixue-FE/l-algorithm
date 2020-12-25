/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let stack = []
  stones.sort((a,b)=>a-b)
  while (stones.length>1){
    const res = stones.pop() - stones.pop()
    if (res>0) {
      let i = 0,sLen = stones.length
      while(i<sLen&&stones[i]<res){
        stack.push(stones.shift())
      }
      stones.unshift(res)
      while(stack.length>0){
        stones.unshift(stack.pop())
      }
    }
  }
  return stones.length?stones[0]:0
};
// @lc code=end

