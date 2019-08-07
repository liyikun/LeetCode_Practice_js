var solveSudoku = function (board) {

    if (!board || board.length === 0) return

    let colMap = new Map()

    let zoneMap = new Map()

    let rowMap = new Map()

    let valid = (i, j, c) => {
        i = i + 1
        j = j + 1
        let zoneIndex = (Math.ceil(i / 3) - 1) * 3 + Math.ceil(j / 3)

        let get = (mapI, index) => {
            if (mapI.has(index)) {
                return !mapI.get(index).has(c)
            } else {
                return true
            }

        }
        return get(rowMap, i) && get(colMap, j) && get(zoneMap, zoneIndex)
    }

    let setMap = (i, j, c) => {
        i = i + 1
        j = j + 1
        let zoneIndex = (Math.ceil(i / 3) - 1) * 3 + Math.ceil(j / 3)

        let add = (mapI, index) => {
            if (!mapI.has(index)) {
                mapI.set(index, new Set())
            }
            mapI.get(index).add(c)
        }

        add(rowMap, i)
        add(colMap, j)
        add(zoneMap, zoneIndex)
    }

    let delMap = (i, j, c) => {
        i = i + 1
        j = j + 1
        let zoneIndex = (Math.ceil(i / 3) - 1) * 3 + Math.ceil(j / 3)

        let del = (mapI, index) => {
            mapI.get(index).delete(c)
        }

        del(rowMap, i)
        del(colMap, j)
        del(zoneMap, zoneIndex)
    }

    let solve = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === '.') {
                    for (let c = 1; c <= 9; c++) {
                        let str = '' + c
                        if (valid(i, j, str)) {
                            board[i][j] = str
                            setMap(i, j, str)
                            if (solve()) {
                                return true
                            } else {
                                board[i][j] = '.'
                                delMap(i, j, str)
                            }
                        }
                    }
                    return false
                }
            }
        }
        return true
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if(board[i][j] !== '.') {
                setMap(i,j,board[i][j])   
            }
        }
    }

    solve()
};