/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
let LinkNode = function(key=null,value=null) {
  this.key=key;
  this.value = value;
  this.prev = null;
  this.next = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.hashMap = {}
  this.head = new LinkNode()
  this.last = new LinkNode()
  this.head.next = this.last
  this.last.prev = this.head
};

LRUCache.prototype._isFull = function(){
  return Object.keys(this.hashMap).length >= this.capacity;
}
LRUCache.prototype._add = function(node){
  let next = this.head.next
  this.head.next = node
  node.next = next
  node.prev = this.head
  next.prev = node
}
LRUCache.prototype._removeNode = function(node){
  let nodeNext = node.next
  let nodePrev = node.prev
  nodePrev.next = nodeNext
  nodeNext.prev = nodePrev
  node.next = node.prev = null
}
LRUCache.prototype._changeToHead = function(node){
  this._removeNode(node)
  this._add(node)
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.hashMap.hasOwnProperty(key)) return -1
  let node = this.hashMap[key];
  this._changeToHead(node)
  return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.hashMap.hasOwnProperty(key)){
    let node = this.hashMap[key];
    node.value = value;
    this._changeToHead(node)
  }else{
    if (this._isFull()) {
      let delNode = this.last.prev
      delete this.hashMap[delNode.key];
      this._removeNode(delNode);
    }
    let node = new LinkNode(key,value)
    this._add(node)
    this.hashMap[key] = node
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

