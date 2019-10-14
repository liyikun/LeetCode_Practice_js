


class MaxHeap {
    constructor(capacity) {
        this.heap = []
        this.maxage = capacity
        this.N = 0
    }
    swap(i, j) {
        let tmp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = tmp
    }
    down(i) {
        while(i * 2 <= this.N) {
            let j = i * 2
            if(j < this.N && this.less(j, j + 1)) j++
            if(!this.less(i, j)) break
            this.swap(i, j)
            i = j
        }     
    }
    up(i) {
        while(i > 1 && this.less(Math.floor(i / 2), i)) {
            this.swap(Math.floor(i / 2), i)
            i = Math.floor(i / 2     )       
        }
    }
    add(num) {
        this.heap[++this.N] = num
        this.up(this.N)
    }
    remove() {
        let max = this.heap[1]
        this.swap(1, this.N--)
        heap[this.N + 1] = null
        this.down(1)
        return max
    }
    peek() {
        return this.heap[1]
    }
    less(i , j) {
        return this.heap[i] < this.heap[j]
    }
    size() {
        return this.N
    }
}


var heap = new MaxHeap(100)

heap.add(3)
heap.add(5)
heap.add(11)
heap.add(4)
heap.add(6)
heap.add(2)