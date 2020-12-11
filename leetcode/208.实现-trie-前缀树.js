/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = tireTreeNode()
};

let tireTreeNode = function(key) {
  let obj = {}
  if (key) {
    obj[key] = tireTreeNode()
  }
  return obj
}
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let nodeNow = this.root
  const len = word.length
  for (let i = 0; i < len; i++) {
    const val = word[i]
    if (!nodeNow[val]) {
      nodeNow[val] = tireTreeNode(val)
    }
    nodeNow = nodeNow[val]
    if (i===len-1) nodeNow.isEnd = true
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  const len = word.length
  let nodeNow = this.root
  for (let i = 0; i < len; i++) {
    const val = word[i]
    if (!nodeNow[val]) return false
    nodeNow = nodeNow[val]
  }
  if (nodeNow.isEnd) {
    return true
  }
  return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  const len = prefix.length
  let nodeNow = this.root
  for (let i = 0; i < len; i++) {
    const val = prefix[i]
    if (!nodeNow[val]) return false
    nodeNow = nodeNow[val]
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

