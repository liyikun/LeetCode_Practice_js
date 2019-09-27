


function power(a, n) {
    if(n == 0) return 1
    
    let res = 1, tmp = a
    
    while(n) {
        if(n & 1) {
            res *= tmp
        }

        n >>= 1
        tmp *= tmp 
    }

    return res

}