/*
 * @lc app=leetcode.cn id=381 lang=javascript
 *
 * [381] O(1) 时间插入、删除和获取随机元素 - 允许重复
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.obj = {}
  this.arr = []
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  this.arr.push(val)
    if (!this.obj[val]) {
        // 每个值使用一个set维护索引，add,delete都是O(1)操作
        const set = new Set()
        set.add(this.arr.length - 1)
        this.obj[val] = set
        return true
    } else {
        this.obj[val].add(this.arr.length - 1)
        return false
    }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  // this.list.length && this.map.has(val) && this.map.get(val).size
  if (this.obj[val]&&this.obj[val].size&&this.arr.length) {
    const set =  this.obj[val]
    // 要移除的值存储在list中的index(多个任选一个)
    const arr = Array.from(set)
    const index = arr.pop()
    set.delete(index)
     const len = this.arr.length
     if (index < len - 1) {
      const lastVal =  this.arr[len - 1]
      let item = this.obj[lastVal]
      item.delete(len - 1)
      item.add(index)
      this.arr[len - 1] = this.arr[index]
      this.arr[index] = lastVal
     }
    this.arr.pop()
    console.log(this.arr);
    return true
  }else return false
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

