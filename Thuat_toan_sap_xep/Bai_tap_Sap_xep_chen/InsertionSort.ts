export class InsertionSort{
    arr:number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    insertionSort(){
        for (let i = 1; i < this.arr.length; i++) {
            let current = this.arr[i];
            let j = i-1;
            while ((j > -1) && (current < this.arr[j])) {
                this.arr[j+1] = this.arr[j];
                j--;
            }
            this.arr[j+1] = current;
        }
    }
}