var wordBreak = function (s, wordDict) {

    let dps = [...new Array(s.length)].map(_ => false)


    for (let i = 0; i < s.length; i++) {
        let curstr = s.slice(0, i + 1)
        for (let j = 0; j < wordDict.length; j++) {
            let word = wordDict[j]
            if (curstr.endsWith(word)) { 
                if(word === curstr) {
                    dps[i] = true   
                } else {
                    if(dps[i - word.length]) {
                        dps[i] = dps[i - word.length]
                    }
                }
            }
        }
    }

    return dps[s.length - 1]
};