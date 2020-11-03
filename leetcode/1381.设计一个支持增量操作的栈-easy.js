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
   this.size = 0
   this.maxSizeVal = maxSize
   this.dataStore = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.maxSizeVal>this.size) {
    this.dataStore.push(x)
    this.size++
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.size===0) return -1
  else {
    this.size--
    return this.dataStore.pop()
  }
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  const size = this.size<k ?  this.size:k
  for (let i = 0; i < size; i++) {
    this.dataStore[i]+=val
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end

