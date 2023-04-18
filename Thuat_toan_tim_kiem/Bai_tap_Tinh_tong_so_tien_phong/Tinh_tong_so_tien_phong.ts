let matrix: number [][] = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

function noHaunted(arr: number[][]): number {
    let sum: number = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == 0 && arr[i][j] !== 0) {
                sum += arr[i][j]
            } else if (arr[i][j] != 0 && arr[i - 1][j] != 0) {
                sum += arr[i][j]
            }
        }
    }
    return sum
}

console.log(noHaunted(matrix))
