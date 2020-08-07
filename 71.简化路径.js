/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []
    let pathArr = path.split('/')
    for (let i = 0; i < pathArr.length; i++) {
      const e = pathArr[i];
      if (e=='..') {
        stack.pop()
      }else if(e && e!=='.'){
        stack.push(e)
      }      
    }
    return '/' + stack.join('/')
};
// @lc code=end

// simplifyPath('/home//foo/')