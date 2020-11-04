/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// var MyQueue = function() {
//   this.s1 = []
//   this.s2 = []
// };

// /**
//  * Push element x to the back of queue. 
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function(x) {
//   this.s1.push(x);
// };

// /**
//  * Removes the element from in front of queue and returns that element.
//  * @return {number}
//  */
// MyQueue.prototype.pop = function() {
//   if(this.s1.length){
//     while(this.s1.length) this.s2.push(this.s1.pop())
//     const val = this.s2.pop()
//     while(this.s2.length) this.s1.push(this.s2.pop())
//     return val
//   }
//   return null;
// };

// /**
//  * Get the front element.
//  * @return {number}
//  */
// MyQueue.prototype.peek = function() {
//   if(this.s1.length){
//     while(this.s1.length) this.s2.push(this.s1.pop())
//     const val = this.s2.pop()
//     this.s2.push(val)
//     while(this.s2.length) this.s1.push(this.s2.pop())
//     return val
//   }
//   return null;
// };

// /**
//  * Returns whether the queue is empty.
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function() {
//   if(this.s1.length) return false;
//   return true;
// };
var MyQueue = function() {
  this.s1 = []
  this.s2 = []
  this.font = null
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  if (!this.s1.length) this.front = x;
  this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if(!this.s2.length){
    while(this.s1.length) this.s2.push(this.s1.pop())
  }
  return this.s2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if(this.s2.length) return this.s2[this.s2.length-1];
  else return this.front
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if(this.s1.length || this.s2.length ) return false;
  return true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

