function saveThePrisoner(n, m, s) {
    let arr = []
    let count = 1
    for(let i=1;i<=s+m;i++){
        if(count===n+1){
            count = 1
        }
        arr.push(count)
        count++
    }
    let check = arr.slice(s-1,(s-1)+m)
    return check[check.length-1]
}
let n = 7
let m = 19
let s = 2
console.log(saveThePrisoner(n,m,s))