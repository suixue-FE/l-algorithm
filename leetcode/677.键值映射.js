/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
function tireNode(val) {
  this.val = val||0;
  this.children = {}
}

function dfs(root){
  let child = root.children
  let keys = Object.keys(child)
    let res = root.val
  if (keys.length) {
    keys.forEach(key =>{
      res += dfs(child[key])
    })
  }
  return res
}
 var MapSum = function() {
  this.root = new tireNode()
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  let nodeNow = this.root
  const len = key.length
  for (let i = 0; i < len; i++) {
    const nodeKey = key[i]
    if (nodeNow.children[nodeKey]==undefined||!nodeNow.children[nodeKey]) {
      nodeNow.children[nodeKey]=new tireNode()
    }
    nodeNow = nodeNow.children[nodeKey]
  }
  nodeNow.val = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  
  let nodeNow = this.root
  const len = prefix.length
  for (let i = 0; i < len; i++) {
    const nodeKey = prefix[i]
    if (nodeNow.children[nodeKey]==undefined||!nodeNow.children[nodeKey]) return 0
    nodeNow = nodeNow.children[nodeKey]
  }
  // console.log(nodeNow);
  return dfs(nodeNow)
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end

