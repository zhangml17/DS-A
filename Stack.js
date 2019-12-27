/**
 * 栈
 */
class Stack {
    constructor() {
        this.dataStore = []
        this.top = 0
    }
    // 入栈
    push(val){
        this.dataStore[this.top++] = val
    }
    // 出栈(删除栈顶元素)
    pop(){
        return this.dataStore.splice(--this.top, 1)[0]
    }
    // 出栈(不删除栈顶元素)
    peek(){
        return this.dataStore[this.top - 1]
    }
    // 清空栈
    clear() {
        this.dataStore = []
        this.top = 0
    }
    length() {
        return this.top
    }
    show() {
        console.log(this.dataStore)
    }
}

// 十进制转其他进制数
function mulBase(num, base) {
    let s = new Stack()
    do{
        s.push(num%base)
        num = parseInt(num/base)
    }while( num > 0)
    let resN = ''
    while(s.length() > 0) {
        resN += s.pop()
    }
    return resN
}

// console.log(mulBase(32, 2))
// console.log(mulBase(125, 8))

// 判断是否回文序列
function isPalindrome(word) {
    let s = new Stack()
    word.split('').forEach(item => {
        s.push(item)
    })
    let res = ''
    while(s.length() > 0) {
        res += s.pop()
    }
    if(res === word) {
        return true
    }else{
        return false
    }
}

console.log(isPalindrome('hello'))   // false
console.log(isPalindrome('racecar')) // true

// let s = new Stack()
// s.push(3)
// s.push(5)
// s.push(53)
// s.push(234)
// s.show()
// // console.log(s.pop())
// // s.peek()
// // s.clear()
// s.show()

