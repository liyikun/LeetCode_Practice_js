var wordBreak = function (s, wordDict) {
    
    let memo = {}

    let dfs = (s) => {
        if (s.length === 0) return true

        if(memo[s]) return memo[s]

        for (let i = 0; i < wordDict.length; i++) {
            let word = wordDict[i]
            if (s.startsWith(word)) {
                if (dfs(s.slice(word.length))) {
                    memo[s] = true
                    return true
                }
            }
        }

        memo[s] = false

        return false
    }

    return dfs(s)
};