/**
 * 列表
 */
class List {
    constructor() {
        this.listSize = 0
        this.pos = 0
        this.dataStore = []
    }
    // 查找指定元素的位置
    find(elem) {
        for(let i=0; i<this.dataStore.length; ++i) {
            if(elem === this.dataStore[i]) {
                return i
            }
        }
        return -1
    }
    insert(elem, after) {
        let insertPos = this.find(after)
        if(insertPos > -1) {
            this.dataStore.splice(insertPos, 1, elem)
            ++this.listSize
            return true
        }
        return false
    }
    // 向列表尾部添加
    append(elem) {
        this.dataStore[this.listSize++] = elem
    }
    // 删除指定元素
    remove(elem) {
        let pos = this.find(elem)
        if(pos > -1) {
            this.dataStore.splice(pos, 1)
            --this.listSize
            return true
        }
        return false
    }
    front() {
        this.pos = 0
    }
    end() {
        this.pos = this.listSize - 1
    }
    prev() {
        --this.pos
    }
    next() {
        if(this.pos < this.listSize) {
            ++this.pos
        }
    }
    clear() {
        this.dataStore = []
        this.listSize = 0
        this.pos = 0
    }
    toString() {
        return this.dataStore
    }
    length() {
        return this.listSize
    }
    currPos() {
        return this.pos
    }
    moveTo(pos) {
        this.pos = pos
    }
    // 返回列表当前位置的元素
    getElement() {
        return this.dataStore[this.pos]
    }
    contains(elem) {
        for(let i=0; i< this.dataStore.length; ++i) {
            if(elem === this.dataStore[i]) {
                return true
            }
        }
        return false
    }
    hasNext() {
        return this.pos < this.listSize 
    }
    hasPrev() {
        return this.pos >= 0
    }

    show() {
        console.log(this.toString())
    }
}

function print(res) {
    console.log(res)
}

var names = new List()
names.append('Cynthia')
names.append('Raymond')
names.append('Barbara')
names.append('Jennifer')
names.append('Bryan')
names.append('Danny')
names.show()

// let res = names.contains('Raymond')
// console.log(res)
// names.show()
// names.remove('Raymond')
// names.show()

names.front()
print(names.getElement())
names.next()
print(names.getElement())
names.next()
names.next()
names.prev()
print(names.getElement())


