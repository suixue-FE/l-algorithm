// /*
//  * @lc app=leetcode.cn id=208 lang=javascript
//  *
//  * [208] 实现 Trie (前缀树)
//  */

// // @lc code=start
// /**
//  * Initialize your data structure here.
//  */
// var Trie = function() {
//   this.root = new tireTreeNode()
// };

// let tireTreeNode = function() {
//   this.END = false;
//   this.children = {};
// }
// /**
//  * Inserts a word into the trie. 
//  * @param {string} word
//  * @return {void}
//  */
// Trie.prototype.insert = function(word) {
//   let nodeNow = this.root
//   const len = word.length
//   for (let i = 0; i < len; i++) {
//     const val = word[i]
//     if (nodeNow.children[val]==undefined||!nodeNow.children[val]) {
//       nodeNow.children[val] = new tireTreeNode(val)
//     }
//     nodeNow = nodeNow.children[val]
//   }
//   nodeNow.END = true;
// };
// Trie.prototype.searchPrefix = function(word){
//   let currNode = this.root;
//   for(let i = 0;i < word.length;i++){
//     // console.log(currNode);
//       if(currNode.children[word[i]]){
//           currNode = currNode.children[word[i]];
//       }else{
//           return null;
//       }
//   }
//   return currNode;
// }
// /**
//  * Returns if the word is in the trie. 
//  * @param {string} word
//  * @return {boolean}
//  */
// Trie.prototype.search = function(word) {
//     let currNode = this.searchPrefix(word);
//     return currNode != null && currNode.END;
//   }

// /**
//  * Returns if there is any word in the trie that starts with the given prefix. 
//  * @param {string} prefix
//  * @return {boolean}
//  */
// Trie.prototype.startsWith = function(prefix) {
//   return !!this.searchPrefix(prefix);
// };

// /**
//  * Your Trie object will be instantiated and called as such:
//  * var obj = new Trie()
//  * obj.insert(word)
//  * var param_2 = obj.search(word)
//  * var param_3 = obj.startsWith(prefix)
//  */
/**
 * Initialize your data structure here.
 */
 var Trie = function() {
  this.tree = new tireTree()
};
function tireTree(children={},end=false) {
  this.children = children;
  this.end = end;
}
/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let tree = this.tree
  for (const s of word) {
    if (!tree.children[s]) {
      tree.children[s] = new tireTree()
    }
    tree = tree.children[s]
  }
  tree.end = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let tree = this.tree
  for (const s of word) {
    if (!tree.children[s]) {
      return false
    }
    tree = tree.children[s]
  }
  return tree.end
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let tree = this.tree
  for (const s of prefix) {
    if (!tree.children[s]) {
      return false
    }
    tree = tree.children[s]
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
// // @lc code=end

