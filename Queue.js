/**
 * 队列
 */
class Queue {
    constructor() {
        this.dataStore = []
    }
    enqueue(elem) {
        this.dataStore.push(elem)
    }
    dequeue() {
        return this.dataStore.shift()
    }
    first() {
        return this.dataStore[0]
    }
    last() {
        return this.dataStore[this.dataStore.length - 1]
    }
    toString() {
        let res = ''
        for(let i=0; i<this.dataStore.length; ++i) {
            res += this.dataStore[i] + ' '
        }
        return res
    }
    empty() {
        if(this.dataStore.length === 0) {
            return true
        }
        return false
    }
}
function print(res) {
    console.log(res)
}

var q = new Queue()
q.enqueue('Meredith')
q.enqueue('Cynthia')
q.enqueue('Jennifer')
print(q.toString())
q.dequeue()
print(q.toString())
print(q.first())
print(q.last())