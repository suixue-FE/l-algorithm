
// var mincostTickets = function(days, costs) {
//   const one = costs[0], seven = costs[1], thirty = costs[2],lastDay = days[days.length-1]
//   let dp = new Array(lastDay+1).fill(0)  // 一个数组，准备存第一天到days中最后一天的钱
//   // costs\v脑子已经不转了，明儿在写
//   let dayIndex = 0
//   for (let i = 1; i <=lastDay; i++){
//     if (days[dayIndex]===i) {
//       const frist =dp[i-1]+one,second = i-7>0?dp[i-7]+seven:seven,third = i-30>0?dp[i-30]+thirty:thirty
//       dp[i]=Math.min(frist,second,third)
//       dayIndex++
//     }else{ 
//       dp[i]=dp[i-1]
//     }
//   }
//   return dp[lastDay]
// };
/*
 * @lc app=leetcode.cn id=983 lang=javascript
 *
 * [983] 最低票价
 */

// @lc code=start
/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
// 这里还有一个双队列的贪心，看不太明白，代码写写看能不能明白
var mincostTickets = function(days, costs) {
  const one = costs[0], seven = costs[1], thirty = costs[2]
  let dayBfWeek = [],dayBfMonth=[],result = 0
  for(let j = 0; j < days.length; j++) {
    const day = days[j]
    while(dayBfWeek.length&&dayBfWeek[0][0]+7<=day) dayBfWeek.shift()
    while(dayBfMonth.length&&dayBfMonth[0][0]+30<=day) dayBfMonth.shift()
    dayBfWeek.push([day,result+seven])
    dayBfMonth.push([day,result+thirty])
    result = Math.min(result + one,dayBfWeek[0][1],dayBfMonth[0][1])
    }
  return result
};
// @lc code=end

// [i(1),j(2),k(30)]
  // days.forEach((day)=>{  // days里的每一天
  //   // 如果当前天在上一个七天的范围内，相当于不用买，就弹出上一次（其实是意思是不用买，弹出后面还会加上seven，相当于result不变的意思）
  //   while(dayBfWeek.length&&dayBfWeek[0][0]+7<=day) dayBfWeek.shift()
  //   // 30天，和七天一个意思
  //   while(dayBfMonth.length&&dayBfMonth[0][0]+30<=day) dayBfMonth.shift()
  //   dayBfWeek.push([day,result+seven])   // 假设当天买的7天的，存入7天队列
  //   dayBfMonth.push([day,result+thirty])  // 假设当前买的30天的，存入30天队列
  //   // 一天的不用存队列，就是直接 result + one
  //   result = Math.min(result + one,dayBfWeek[0][1],dayBfMonth[0][1])
  // })