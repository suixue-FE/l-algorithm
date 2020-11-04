/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack =[],len = s.length,num = 0
  for (let i = 0; i < len; i++) {
    const n = s[i];
    if (!isNaN(n)) {
      num= Number(num*10) + Number(n)
    }
    else if (n==']'){
      let str = '',string = ''
      // console.log(stack);
      while (stack.length && stack[stack.length-1]!=='['){
        str=`${stack.pop()}${str}`
      }
      string = str
      if (stack[stack.length-1]=='[') {
        stack.pop()
        let number = stack.pop()
        while(number-1>0){
          string = `${string}${str}`
          number--
        }
        // string = string.repeat(number) // 虽然简单但是居然慢！
      }
      stack.push(string)
    }else if(n=='['){
      stack.push(num)
      stack.push(n)
      num=0
    }else stack.push(n)
  }
  
  return stack.join('')
};
// @lc code=end

