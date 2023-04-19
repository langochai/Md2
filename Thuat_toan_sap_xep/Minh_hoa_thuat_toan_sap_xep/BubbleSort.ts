export class BubbleSort{
    arr:number[];
    constructor(arr:number[]) {
        this.arr = arr
    }
    bubbleSort(){
        console.log(`BUBBLE SORT:`)
        for (let i = 0; i < this.arr.length-1; i++) {
            console.log(`\n lan lap thu ${i+1} \n`)
            console.log(`mang hien tai la ${this.arr}`)
            for (let j = 0; j < this.arr.length-1; j++) {
                if(this.arr[j+1]<=this.arr[j]){
                    [this.arr[j],this.arr[j+1]]=[this.arr[j+1],this.arr[j]]
                    console.log(`vi tri ${j+1} nho hon hoac bang vi tri ${j}`)
                    console.log(`doi cho 2 vi tri`)
                    console.log(`mang hien tai la ${this.arr}`)
                } else {
                    console.log(`giu nguyen hai vi tri ${j} va ${j+1}`)
                }
            }
        }
    }
}