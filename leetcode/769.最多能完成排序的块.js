/*
 * @lc app=leetcode.cn id=769 lang=javascript
 *
 * [769] 最多能完成排序的块
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
  if (arr.length===1) return 1
  let stack = [arr[0]]
  for (let index in arr) {
    const val = arr[index];
    if (val>stack[stack.length-1]) stack.push(val);
    else{
      const head = stack.pop();
      while(stack.length&&stack[stack.length-1]>val){
        stack.pop()
      }
      stack.push(head);
    }
  }
  return stack.length
};
// @lc code=end

//// 明白了，意思是只要我比前面大，那前面就能好好分块我管不着
/// 但是只要我比前面小了，那不好意思了，必须找到前面比我小的，比我小的
/// 我都管不着，你们自己分你们的，只要是比我大的，前面分多少都不算
/// 我必须和你们一块玩儿
/// 因为栈里面存的是每一块的领头大哥，所以我只要比领头大哥大就好