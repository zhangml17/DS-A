/**
 * 集合
 * 并集、交集、子集、补集
 */
class Set {
    constructor() {
        this.dataStore = []
    }
    add(val) {
        if(this.dataStore.indexOf(val) < 0) {
            this.dataStore.push(val)
            return true
        }else {
            return false
        }
    }
    remove(val){
        let pos = this.dataStore.indexOf(val)
        if(pos > 0) {
            this.dataStore.splice(pos, 1)
            return true
        }else {
            return false
        }
    }
    // 集合中是否包含val
    contains(val) {
        if(this.dataStore.indexOf(val) > -1) {
            return true
        }else {
            return false
        }
    }
    // 并集
    union(set) {
        let tmpSet = new Set()
        for(let i=0; i<this.dataStore.length; ++i) {
            tmpSet.add(this.dataStore[i])
        }
        for(let i=0; i<set.dataStore.length; ++i) {
            if(!tmpSet.contains(set.dataStore[i])) {
                tmpSet.dataStore.push(set.dataStore[i])
            }
        }
        return tmpSet
    }
    // 交集
    intersect(set) {
        let tmpSet = new Set()
        for(let i=0; i<set.dataStore.length; ++i) {
            if(this.contains(set.dataStore[i])) {
                tmpSet.add(set.dataStore[i])
            }
        }
        return tmpSet
    }
    // 子集 
    // A.subSet(B) : B是不是A的子集
    subset(set) {
        if(this.size() < set.size()) {
            return false
        }
        for(let i=0; i<set.dataStore.length; ++i) {
            if(!this.contains(set.dataStore[i])) {
                return false
            }
        }
        return true
    }

    // 补集 A.difference(B)
    difference(set) {
        let tmpSet = new Set()
        for(let i=0; i<set.dataStore.length; ++i) {
            if(!this.contains(set.dataStore[i])) {
                tmpSet.add(set.dataStore[i])
            }
        }
        return tmpSet
    }

    size(){
        return this.dataStore.length
    }
    show() {
        console.log(this.dataStore)
    }
}

let s = new Set()
s.add('David')
s.add('Jennifer')
s.add('Cynthia')
s.add('Mike')
s.add('Raymond')
s.show()

// if(s.add('Mike')) {
//     console.log('Mike added')
// }else {
//     console.log('Mike has added')
// }

// if(s.remove('Mike')) {
//     console.log('Mike removed')
// }else {
//     console.log('Mike can not removed')
// }
// s.show()

let f = new Set()
f.add('Jerry')
f.add('Mike')
f.add('Jferuy')
f.add('David')
f.add('Raymonds')
f.show()

// let res = s.union(f)
// let res = s.intersect(f)
// res.show()

let g = new Set() 
g.add('Cynthia')
g.add('Mike')
g.add('Raymonds')

// let res = s.subset(g)
// console.log(res)

let res = s.difference(g)
res.show()