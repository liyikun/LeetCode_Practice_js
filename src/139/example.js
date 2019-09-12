var wordBreak = function (s, wordDict) {
    if (s.length === 0) return true

    for (let i = 0; i < wordDict.length; i++) {
        let word = wordDict[i]
        if (s.startsWith(word)) {
            if (wordBreak(s.slice(word.length), wordDict)) return true
        }
    }

    return false
};