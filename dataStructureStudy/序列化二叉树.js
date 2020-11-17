/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return '[]'
  let queue = [root], qLen = 1,resArr=`[${root.val},`
  while (qLen){
    let arrNow = ''
    for (let i = 0; i < qLen; i++) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
        arrNow = arrNow + node.left.val + ','
      }else arrNow=arrNow + 'null,'
      if (node.right) {
        queue.push(node.right)
        arrNow = arrNow + node.right.val + ','
      }else arrNow=arrNow + 'null,'
    }
    qLen = queue.length
    if (qLen!==0) resArr = resArr+arrNow
  }
  return `${resArr.slice(0,-1)}]`
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  if(data == "[]") return null
  let list = data.slice(1,-1).split(',')
  let root =  new TreeNode(list.shift())
  let queue = [root]
  while(queue.length&&list.length){
    const qLen = queue.length
    for (let i = 0; i < qLen; i++){
      const node = queue.shift()
      const left = list.shift()
      const right = list.shift()
      if (left&&left != 'null') {
        node.left =  new TreeNode(left)
        queue.push(node.left)
      }
      if (right&&right != 'null') {
        node.right =  new TreeNode(right)
        queue.push(node.right)
      }
    }
  }
  return root
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/