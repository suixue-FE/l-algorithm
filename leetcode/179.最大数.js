/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a, b) =>{
    // let stra = a.toString()+b.toString(),strb = b.toString()+a.toString()
    let stra = a + '' + b, strb = b + '' + a; // 下面这种比上面快啊这是为啥？
    return strb-stra
  })
  return nums[0]==0?'0':nums.join('')
};
// @lc code=end