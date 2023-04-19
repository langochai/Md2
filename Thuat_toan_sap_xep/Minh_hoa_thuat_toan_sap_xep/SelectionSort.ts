export class SelectionSort{
    arr:number[];

    constructor(arr: number[]) {
        this.arr = arr;
    }
    selectionSort(){
        console.log(`SELECTION SORT:`)
        for (let i = 0; i < this.arr.length; i++) {
            console.log(`lan lap thu ${i+1}`)
            let min:number = this.arr[i]
            console.log(`tim vi tri ${i}:`)
            let index:number = i
            for (let j = i+1; j < this.arr.length; j++) {
                if (this.arr[j]<min){
                    min = this.arr[j]
                    index = j
                }
            }
            console.log(`gia tri nho nhat can tim la ${min}`)
            this.arr[index] = this.arr[i]
            this.arr[i] = min
            console.log(`doi cho gia tri tai vi tri ${i} va vi tri ${index}`)
            console.log(`mang hien tai la ${this.arr}\n`)
        }
    }
}