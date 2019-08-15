//https://leetcode-cn.com/contest/biweekly-contest-6/problems/analyze-user-website-visit-pattern/
/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    
    let userslink = {
        
    }
  
    for(let i = 0;i < username.length;i++) {
        
        let name = username[i]
        let time = timestamp[i]
        let site = website[i]
        
        if(!userslink[name]) {
            userslink[name] = []
        } 
        let pre = userslink[name]
        
        let j = 0
        for(;j < pre.length; j++) {
            if(time < pre[j].time) {
                break;
            }
        }
        
        pre = [...pre.slice(0, j), {
            time,
            site
        },...pre.slice(j, pre.length)]
        
        userslink[name] = pre
    }
    
    let resultscount  ={
        
    }
    let results = {
        
    }
    
    let maxcount = 0
    let maxKeys = "zzzzzzzzzzzzzzzz"

    Object.keys(userslink).forEach(key => {
     
        let pathsall = userslink[key].map(({site}) => site)
        
        let allpaths =[]
        
        let getpaths = (path, start,index) => {
            if(index === 3) {
                allpaths.push(path)
                return
            }   
            for(let i = start;i < pathsall.length;i++) {
                let newp = [...path]
                newp.push(pathsall[i])
                getpaths(newp, i + 1, index + 1)                
            }
        }
        
        getpaths([],0,0)
        
        allpaths.map((paths) => {
            let keys = paths.join("")
            if(!results[keys]) {
                results[keys] = paths
                resultscount[keys] = 1
            } else {
                resultscount[keys] = resultscount[keys] + 1
            }
            if(resultscount[keys] >= maxcount) {
                if(resultscount[keys] === maxcount && keys > maxKeys){
                     continue
                }
                maxcount = resultscount[keys]
                maxKeys= keys
            }
        })
    }) 
    
    console.log(results)
    return results[maxKeys] || []
};