var isValidSudoku = function(board) {
    let columnsMap = new Map()
    let zoneMap = new Map()
    
    for( let i = 0; i < board.length; i++) {
        let lines = board[i]
        let curRowSet = new Set()

        for( let j = 0; j < lines.length ;j ++) {
            let num = lines[j]

            if(num === ".") continue
   
            if(curRowSet.has(num)) {
                return false
            }
            curRowSet.add(num)

            if(columnsMap.has(j)) {
                if(columnsMap.get(j).has(num)) {
                    console.log('j',j)
                    return false
                }
            } else {
                columnsMap.set(j, new Set())
            }
            columnsMap.get(j).add(num)
            
            let zoneIndex = Math.ceil((i + 1) / 3) + Math.floor(j / 3) * 3

            if(zoneMap.has(zoneIndex)) {
                if(zoneMap.get(zoneIndex).has(num)) {
                    return false   
                }
            } else {
                zoneMap.set(zoneIndex, new Set())
            }
            zoneMap.get(zoneIndex).add(num)
            
        }
    }

    return true
};