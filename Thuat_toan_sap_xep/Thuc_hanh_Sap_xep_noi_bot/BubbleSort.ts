export class BubbleSort{
    arr:number[];
    constructor(arr:number[]) {
        this.arr = arr
    }
    bubbleSort(){
        for (let i = 0; i < this.arr.length-1; i++) {
            for (let j = 0; j < this.arr.length-1; j++) {
                if(this.arr[j+1]<=this.arr[j]){
                    [this.arr[j],this.arr[j+1]]=[this.arr[j+1],this.arr[j]]
                }
            }
        }
    }
}