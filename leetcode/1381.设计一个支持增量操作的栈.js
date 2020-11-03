/*
 * @lc app=leetcode.cn id=1381 lang=javascript
 *
 * [1381] 设计一个支持增量操作的栈
 */

// @lc code=start
/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.satck = []
  this.hash = {}
  this.size = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.size<this.maxSize) {
    this.satck.push(x)
    this.size++
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.size<=0) return -1
  const top = this.size - 1
  const addVal = this.hash[top]||0
  let item = this.satck.pop();
  this.size-- 
  item+=addVal
  // 这里要注意，如果弹出了值，就证明首位已经加过了
  // 新加进来的数字不需要加，但是他后面的数字还没加
  // 所以首位变为0，下一位加上
  const nowTop = top - 1;
  if (nowTop in this.hash) this.hash[nowTop] += addVal;
  else this.hash[nowTop] = addVal
  this.hash[top] = 0;
  return item
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  const index = k>this.size?this.size-1:k-1
  if (index in this.hash) this.hash[index] += val;
  else this.hash[index] = val
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end

