/**
 * 散列
 */
class HashTable {
    constructor() {
        this.table = new Array(137)
    }
    // 散列函数：字符串中的每个字符的ASCII码值之和对数组长度取余
    simpleHash(data) {
        let total = 0
        for(let i=0; i< data.length; ++i) {
            total += data.charCodeAt(i)
        }
        return total % this.table.length
    }
    betterHash(data) {
        let total = 0
        const H = 37
        for(let i=0; i<data.length; ++i) {
            total += H*total + data.charCodeAt(i)
        }
        return total % this.table.length
    }
    showDistro() {
        for(let i=0; i<this.table.length; ++i) {
            if(this.table[i] !== undefined) {
                console.log(i, ': '+this.table[i])
            }
        }
    }
    put(data) {
        let pos = this.simpleHash(data)
        // let pos = this.betterHash(data)
        this.table[pos] = data
    }
}
var hTable = new HashTable()
hTable.put('David')
hTable.put('Jennifer')
hTable.put('Donnie')
hTable.put('Raymond')
hTable.put('Cynthia')
hTable.put('Clayton')
hTable.showDistro()
