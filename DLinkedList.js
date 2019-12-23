/**
 * 双向链表结构
 * 和单链表的区别：多了一个指向前驱节点的属性previous
 */
class Node {
    constructor(elem) {
        this.elem = elem
        this.next = null
        this.previous = null
    }
}

class LList {
    constructor() {
        this.head = new Node('head')
        this.length = 0 
    }
    // 找到当前节点
    find(elem) {
        let currentNode = this.head
        while(currentNode.elem !== elem) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    // 找到当前节点的前一个节点
    findPrevious(elem) {
        let currentNode = this.head
        while(currentNode.next != null && currentNode.next.elem != elem) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    // 查找最后一个节点
    findLast() {
        let currentNode = this.head
        while(currentNode.next != null) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    // 删除一个节点
    remove(item) {
        let currentNode = this.find(item)
        currentNode.privious.next = currentNode.next
        currentNode.next.privious = currentNode.privious
        // 销毁被删除的节点
        currentNode.previous = null
        currentNode.next = null
    }
    // 在item节点之后插入一个节点newElem
    insert(newElem, elem) {
        let newNode = new Node(newElem)
        let currentNode = this.find(elem)
        newNode.next = currentNode.next
        newNode.previous = currentNode
        currentNode.next = newNode
    }
    // 顺序打印链表所有节点
    display() {
        let currentNode = this.head
        while(currentNode.next != null) {
            currentNode = currentNode.next
            console.log(currentNode.elem)
        }
    }
    // 倒序打印链表所有节点
    displayReverse() {
        let currentNode = this.findLast()
        while(currentNode.previous != null) {
            console.log(currentNode.elem)
            currentNode = currentNode.previous
        }
    }
}

let cities = new LList()
cities.insert('Beijing', 'head')
cities.insert('Shanghai', 'Beijing')
cities.insert('Xian', 'Shanghai')
cities.insert('Guangzhou', 'Xian')
cities.insert('Hangzhou', 'Guangzhou')
// cities.remove('Xian')
cities.display()
console.log('--------我是分割线--------')
cities.displayReverse()
