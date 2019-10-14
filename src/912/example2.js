function swap(arr, i, j) {
    if(i === j) return
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}


function heapSort(arr) {
    let n = arr.length

    if(n <= 1) return arr

    for(let i = Math.floor(n / 2) - 1; i >= 0 ; i--) {
        maxHeapify(arr, i, n)  
    }

    for (let j = 0; j < n; j++) {
        swap(arr, 0, n - 1 - j)
        maxHeapify(arr, 0, n - 2 - j);
    }
    return arr;
}


function maxHeapify(arr, i, size) {
    let iMax, left, right
    do {
        left = i * 2 + 1, right = i * 2 + 2
        iMax = i

        if(left <= size && arr[left] > arr[iMax]) {
            iMax = left
        }
    
        if(right <= size && arr[right] > arr[iMax]) {
            iMax = right
        }
      
        if(iMax !== i) {
            swap(arr, iMax, i)
            i = iMax
            iMax = undefined
        }
    } while(iMax !== i)
}


let arr = [7,3,4,9,8,1,2,6,5]

console.log(heapSort(arr))