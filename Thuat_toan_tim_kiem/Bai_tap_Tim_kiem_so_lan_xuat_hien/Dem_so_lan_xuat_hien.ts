function findNumberOfAppearance(arr: number[], target: number): number {
    let count:number = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===target) count++
    }
    return count
}

let arr:number[] = [1,1,2,3,4,5,7,7,8,8,9,0,5]
console.log(findNumberOfAppearance(arr,1))