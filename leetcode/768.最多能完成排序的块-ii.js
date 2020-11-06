/*
 * @lc app=leetcode.cn id=768 lang=javascript
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  const len = arr.length
  let stack = [arr[0]]
  for (let index=1; index<len; index++) {
    const val = arr[index];
    if (val>=stack[stack.length-1]) stack.push(val);
    else{
      const head = stack.pop();
      while(stack.length&&stack[stack.length-1]>val)stack.pop()
      stack.push(head);
    }
  }
  return stack.length
};
// @lc code=end

