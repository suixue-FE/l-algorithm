/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const l1 = word1.length,l2 = word2.length
  if (l1*l2===0) return l1+l2
  let L = Array.from(new Array(l1+1),()=>new Array(l2+1))
  for (let i = 0; i <= l1 ; i++) {
    L[i][0] = i;
  }
  for (let j = 0; j <= l2; j++) {
    L[0][j] = j;
  }
  for (let i = 1;i<=l1;i++){
    for (let j = 1; j<= l2; j++){
      // 这个判断和下面不太一样，注意一下，第0的时候是空字符串而不是第一个
      L[i][j] = word2[j-1]=== word1[i-1] ? L[i-1][j-1] :  1 + Math.min(L[i-1][j-1], L[i-1][j], L[i][j-1])
  }
}
  return L[l1][l2]
};
// @lc code=end

// "horse" "ros"	
// '	    h	ho hor	hors	horse
// 	'	  0	1	2	 3	  4	    5
// r	  1	1	2	 2	  3	    4
// ro	  2	2	2	 2	  3	    3
// ros	3	3	2	 2	  2	    3

// 想一想，我用L[i][j]代表word1第i个之前和word2第j个之前的距离
// 第一种L[i-1][j]+1 相当于word1加了一步
// 第二种L[i][j-1]+1 相当于word1加了一步
// 第三种 L[i-1][j-1],这个有两种可能性
// 一、两个字符最后一个字母相同,这时候这一步相当于不用动 也就是L[i-1][j-1]=L[i][j]
// 二、两个字符最后一个字母不同,这时候需要加一步 也就是L[i-1][j-1]+1=L[i][j]

// 推断公式
// if (word2[j]===word1[i]) L[i][j] = Math.min(L[i-1][j]+1,L[i][j-1]+1,L[i-1][j-1])
// // else L[i][j] = Math.min(L[i-1][j]+1,L[i][j-1]+1,L[i-1][j-1]+1)
// // 上面一步计算等于
// else L[i][j] = Math.min(L[i-1][j],L[i][j-1],L[i-1][j-1])+1


// 但是我们又知道了 L[i-1][j-1] 和 L[i-1][j] / L[i][j-1] 
// 也就重新推导出
// if (word2[j]===word1[i]) L[i][j] = L[i-1][j-1]
// else L[i][j] = L[i-1][j-1])