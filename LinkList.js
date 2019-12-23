// 构造一个链表结构
class Node {
    constructor(elem) {
        this.elem = elem
        this.next = null
    }
}

class LList {
    constructor() {
        this.head = new Node('head')
        this.length = 0 
    }
    // 找到当前元素
    find(elem) {
        let currentNode = this.head
        while(currentNode.elem !== elem) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    // 找到当前元素的前一个元素
    findPrevious(elem) {
        let currentNode = this.head
        while(currentNode.next != null && currentNode.next.elem != elem) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    // 删除一个元素
    remove(item) {
        let prevNode = this.findPrevious(item)
        // if(prevNode.next != null) {
        prevNode.next = prevNode.next.next
        // }
    }
    // 在item元素之后插入一个新元素newElem
    insert(newElem, elem) {
        let newNode = new Node(newElem)
        let prevNode = this.find(elem)
        newNode.next = prevNode.next
        prevNode.next = newNode
    }
    // 打印链表所有元素 
    display() {
        let currentNode = this.head
        while(currentNode.next != null) {
            currentNode = currentNode.next
            console.log(currentNode.elem)
        }
    }
}

let cities = new LList()
cities.insert('Beijing', 'head')
cities.insert('Shanghai', 'Beijing')
cities.insert('Xian', 'Shanghai')
cities.insert('Guangzhou', 'Xian')
cities.insert('Hangzhou', 'Guangzhou')
cities.remove('Xian')
cities.display()
