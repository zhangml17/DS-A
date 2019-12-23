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
    find(elem) {
        let currentNode = this.head
        while(currentNode.elem !== elem) {
            currentNode = currentNode.next
        }
        return currentNode
    }
    insert(newElem, elem) {
        let newNode = new Node(newElem)
        let prevNode = this.find(elem)
        newNode.next = prevNode.next
        prevNode.next = newNode
    }

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
cities.display()
