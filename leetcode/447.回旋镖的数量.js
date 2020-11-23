/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let count = 0
  points.forEach(value =>{
    let map = {}
    points.forEach(val2=>{
      const length = (value[0]-val2[0])**2 + (value[1]-val2[1])**2
      map[length] = (map[length] || 0) + 1;
    })
    for (const i in map) {
      const num = map[i]
      if (num > 1) count += num * (num - 1);
    }
  })

  return count
};
// @lc code=end

