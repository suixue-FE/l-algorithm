class Node{
  // 节点
  constructor(data){
    this.data = data
    this.next = null
  }
}
class LinkNodeList{
  // 链表
  constructor(){
    // 长度
    this.length = 0
    // 链表头部
    this.head = null
  }
  // 追加
  append(data){
    let node = new Node(data)
    let cur
    // 1、头部为空2、不为空
    if (this.head == null) {
      this.head = node
    }else{
      cur = this.head
      while(cur.next){
        cur = cur.next
      }
      cur.next = node
    }
    this.length += 1
  }
  // 打印
  toString(){
    let cur = this.head
    let ret = []
    while(cur){
      ret.push(cur.data)
      cur = cur.next
    }
    return ret.join('=>')
  }
  // 移除指定位置节点
  removeAt(index){
    if(index>this.length||index<0){
      return
    }else{
      let cur = this.head
      // 要用到上一个节点，所以取一个pre
      let prev
      let i = 0
      if (index == 0) {
        // 删除第一项
        this.head = cur.next
      }else{
        while(i<index){
          prev = cur
          cur = cur.next
          i++
        }
        prev.next = cur.next
        cur.next = null
      }
      this.length -= 1
    }
  }
}

// 链表结构
let linkNodeList = new LinkNodeList()

linkNodeList.append('121212')
linkNodeList.append('从中间写一个')
linkNodeList.append('我想写个对象')
linkNodeList.append({test:'我试了'})
linkNodeList.removeAt(2)
console.log(linkNodeList.toString());