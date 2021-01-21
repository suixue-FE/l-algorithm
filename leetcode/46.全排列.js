/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let results = [] 
  const backTrace=(res,used)=>{
    if(res.length === nums.length){
      results.push(res)
      return
    }
      nums.forEach(val=>{
        if(!used[val]){
          res.push(val)
          used[val] = true
          backTrace([...res],used)
          res.pop()
          used[val] = false
        }
      })
    
  };
  backTrace([],{})
  return results
};
// function backTrace(output,nums,res,used) {
//   // console.log(output);
//   if(output.length === nums.length) {
//     // console.log(output,nums);
//     res.push([...output])
//   }
//   // console.log(res);
//   for (const num of nums) {
//     if(used[num]) continue
//     output.push(num);
//     used[num] = true;
//     backTrace(output,nums,res,used)
//     output.pop()
//     used[num] = false;
//   }
// }
// var permute = function(nums) {
//   let results = [] 
//   // 第四个参数是用来处理内部是否已经存在的判定
//   backTrace([],nums,results,{});
//   return results
// };
// @lc code=end
