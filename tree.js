/**
 * 二叉查找树:
 * 已知前序、中序或者中序、后序都可以唯一确定一棵二叉树，但是已知前序、后序是无法唯一确定一棵二叉树的，解不唯一
 */
class Node {
    constructor(val, left, right) {
        this.val = val
        this.left = left
        this.right = right
    }

    show() {
        return this.val
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(val) {
        var n = new Node(val, null, null)
        if(this.root == null) {
            this.root = n
        }else{
            var current = this.root
            var parent
            while(true) {
                parent = current
                if(val < current.val) {
                    current = current.left
                    if(current == null) {
                        parent.left = n
                        break
                    }
                }else{
                    current = current.right
                    if(current == null) {
                        parent.right =  n
                        break
                    }
                }
            }
        }
    }
    getMax() {
        let currentNode = this.root
        while( currentNode.right != null) {
            currentNode = currentNode.right
        }
        return currentNode.val
    }
    // 最小值
    getMin() {
        let currentNode = this.root
        while( currentNode.left != null) {
            currentNode = currentNode.node
        }
        return currentNode.val
    }
    // 查找给定值
    find(val) {
        let currentNode = this.root
        while(currentNode != null) {
            if(currentNode.val == val) {
                return currentNode
            }else if(currentNode.val > val) {
                currentNode = currentNode.left
            }else{
                currentNode = currentNode.right
            }
        }
        return null
    }
}
// 中序遍历(左 --> 根 --> 右)
function inOrder(node) {
    if(node != null) {
        inOrder(node.left)
        console.log(node.val)
        inOrder(node.right)
    }
}
// 先序遍历(根 --> 左 --> 右)
function preOrder(node) {
    if(node != null) {
        console.log(node.val)
        preOrder(node.left)
        preOrder(node.right)
    }
}
// 后序遍历(左 --> 右 --> 根)
function postOrder(node) {
    if( node != null) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.val)
    }
}



var tree = new BST()
tree.insert(23)
tree.insert(45)
tree.insert(16)
tree.insert(37)
tree.insert(3)
tree.insert(99)
tree.insert(22)
// console.log('中序遍历--') 
// inOrder(tree.root)
// console.log('先序遍历--') 
// preOrder(tree.root)
// console.log('后序遍历--') 
// postOrder(tree.root)

