let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10]
let i:number = 0
let result: number[]=[]
while (i<=10){
    if(numbers.indexOf(i)===-1){
        result.push(i)
    }
    i++
}
console.log(result)