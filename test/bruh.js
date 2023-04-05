let arr = ['1', '2', '3','4']
let k = 3


function tinhtoan(index){
    let result = [arr[index]]
    let n = arr.slice(index+1,arr.length)

    function wtf() {

        let newN = []
        n.forEach((e) => {
            newN.push(e)
        })


        let newResult = []
        result.forEach((e) => {
            newResult.push(e)
        })


        for (let i = 0; i < newResult.length; i++) {
            for (let j = 0; j < n.length; j++) {
                result.push(result[i] + n[0])
                j--
                n.splice(0, 1)
            }
        }
        newN.forEach((e) => {
            n.push(e)
        })
        result.splice(0, newResult.length)
        n.splice(0, 1)
    }

    for (let i = 0; i < k-1; i++) {
        wtf()
    }
    console.log(result)
}

for (let i = 0; i < arr.length+1-k; i++) {
    tinhtoan(i)
}