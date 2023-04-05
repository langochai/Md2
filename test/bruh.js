let arr = ['1', '2', '3', '4']
let k = 3


function tinhtoan(index) {
    let result = [arr[index]]
    let n = arr.slice(index + 1, arr.length)

    function wtf() {

        let newResult = []              //saved result
        result.forEach((e) => {
            newResult.push(e)
        })


        for (let i = 0; i < newResult.length; i++) {
            let newN = []                   //saved n
            n.forEach((e) => {
                newN.push(e)
            })
            for (let j = 0; j < n.length; j++) {
                result.push(result[i] + n[0])
                j--
                n.splice(0, 1)
            }
            newN.forEach((e) => {      //restore n
                n.push(e)
            })
            n.splice(0, 1)
        }

        result.splice(0, newResult.length) //finish new result

    }

    for (let i = 0; i < k - 1; i++) {
        wtf()
    }
    console.log(result)
}

for (let i = 0; i < arr.length + 1 - k; i++) {
    tinhtoan(i)
}
// tinhtoan(0)