

const fetchA = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('aa')
    }, 1000)
})


const fetchB = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('bb')
    }, 500)
})


function *test() {
    const a = yield fetchA()
    console.log(a)
    const b = yield fetchB()
    console.log(b)
}


function run(gen) {
    let g = gen()
    let next = (data) => {
        const res = g.next(data)

        if(res.done) return res.value
        res.value.then((data) => {
            console.log(data)
            next(data)
        })
    }

    next()
}


run(test)


setTimeout(() => {
    Promise.resolve().then(() => {
        console.log('1')
    })
}, 0)

setTimeout(() => {
    console.log('3')
    Promise.resolve().then(() => {
        console.log('2')
    })
}, 0)