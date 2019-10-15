/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if(numRows.length < 2) return s

    let n = s.length

    let res = [...new Array(n)].map(_ => '')
    
    let i = 0, flag = -1

    for(let c of s) {
        res[i] += c
        if(i == 0 || i == numRows - 1) flag = -flag
        i += flag
    }

    return res.join('')
    
};