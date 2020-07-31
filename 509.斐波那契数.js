/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

 // 递归
// @lc code=start
// /**
//  * @param {number} N
//  * @return {number}
//  */
// var fib = function(N) {
//   if(N==1 || N==0){
//     return N
//   }else{
//     return fib(N-1) + fib(N-2)
//   }
// };

// 递推 on
var fib = function(N) {
  let arr = []
  for(let i=0;i<=N;i++){
    if(i==1 || i==0){
      arr[i] = i
    }else{
      arr[i] = arr[i-1]+arr[i-2]
    }
  }
  return arr[N]
};
// @lc code=end