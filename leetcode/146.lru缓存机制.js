/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.hashMap = new Map()
  this.maxLen = capacity
  this.head = null
  this.last = null
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.hashMap.get(key)) {
    let node = this.hashMap.get(key)
    let prev = node.prev
    if (prev!=null) {
      let next = node.next
      prev.next = next
      if (!next) this.last = prev
      else next.prev = prev
      this.head.prev = node
      node.next = this.head
      node.prev = null
      this.head = node
    }
    // console.log(this.hashMap);
    return node.value
  }
  return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.hashMap.get(key)) {
    let node = this.hashMap.get(key)
    node.value = value
    let prev = node.prev
    if (prev!=null) {
      let next = node.next
      prev.next = next
      if (!next) this.last = prev
      else next.prev = prev
      this.head.prev = node
      node.next = this.head
      node.prev = null
      this.head = node
    }
  }else{
    if (this.hashMap.size<this.maxLen ) {
      this.hashMap.set(key,{key,value,prev:null,next:null})
      let node = this.hashMap.get(key)
      if (this.head != null){
        this.head.prev = node
        node.next = this.head
        node.prev = null
        this.head = node
      } else this.head = this.last = node
    }else{
      let lastPrev = this.last.prev
      this.hashMap.set(key,{key,value,prev:null,next:null})
      let node = this.hashMap.get(key)
      this.hashMap.delete(this.last.key)
      if (lastPrev){
        lastPrev.next = null
        node.next = this.head
        this.head.prev = node
        this.head = node
        this.last = lastPrev
      } 
      else this.head = this.last = node
    }
  }
  // console.log(this.last,'last');
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

