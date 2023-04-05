let n = [1,2,3,4]
let k = 2

let index = 0
for (let i = 0; i < 3; i++) {
    let a = n[index]
    n.splice(0,index+1)
    let result =[]
    for (let i = 0; i < n.length; i++) {
        result.push([a,n[i]])
    }
    console.log(result)
}