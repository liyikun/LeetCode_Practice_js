var countAndSay = function(n) {
    
    let pre = "1"

    for(let i = 2;i <= n; i++) {
        let next = "",count = 1,pren = pre[0]
        for(let j = 0; j < pre.length; j ++) {
            if(pre[j] == pren) {
                count++
            } else {
                next = count.toString() + pren
                pren = pre[j]
                count = 1
            }
        }
        next = count.toString() + pren
        pre = next
    }

    return pre
};