let a = 17
let b = 24
function squares(a,b){
    let result = []
    for (let i = Math.floor(Math.sqrt(a)); i <= Math.round(Math.sqrt(b)); i++) {
        result.push(Math.pow(i,2))
    }
    if(a>result[0]) result.shift()
    if(b<result[result.length-1]) result.pop()
    return result.length
}

console.log(squares(a,b))