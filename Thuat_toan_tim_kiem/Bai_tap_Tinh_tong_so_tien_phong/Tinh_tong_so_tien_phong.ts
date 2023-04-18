let matrix: number [][] = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

function noHauntedRoom(arr: number[][]): number {
    let sum: number = 0
    for (let f = 0; f < arr[0].length; f++) {
        if (arr[0][f] != 0) sum += arr[0][f]
    }
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != 0) {
                let flag: boolean = true
                for (let k = i - 1; k >= 0; k--) {
                    if (arr[k][j] == 0) flag = false
                }
                if (flag) sum += arr[i][j]
            }
        }
    }
    return sum
}

console.log(noHauntedRoom(matrix))
