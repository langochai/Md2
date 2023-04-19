export class SelectionSort{
    arr:number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }
    selectionSort(){
        for (let i = 0; i < this.arr.length; i++) {
            let min:number = this.arr[i]
            let index:number = i
            for (let j = i+1; j < this.arr.length; j++) {
                if (this.arr[j]<min){
                    min = this.arr[j]
                    index = j
                }
            }
            this.arr[index] = this.arr[i]
            this.arr[i] = min
        }
    }
}