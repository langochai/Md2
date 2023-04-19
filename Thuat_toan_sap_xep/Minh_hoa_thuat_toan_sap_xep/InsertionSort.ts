export class InsertionSort{
    arr:number[];
    constructor(arr: number[]) {
        this.arr = arr;
    }
    insertionSort(){
        console.log(`INSERTION SORT:`)
        for (let i = 1; i < this.arr.length; i++) {
            console.log(`lan lap thu ${i}:`)
            console.log(`mang hien tai la ${this.arr}`)
            let current = this.arr[i];
            console.log(`ta chon vi tri ${i} voi gia tri la ${this.arr[i]} de luu lai`)
            let index:number = i-1
            for (let j = i-1; j > -1 ; j--) {
                if(current<this.arr[j]){
                    this.arr[j+1] = this.arr[j]
                    console.log(`vi tri ${j} lon hon gia tri da luu`)
                    console.log(`day vi tri ${j} sang phai`)
                } else {
                    index = j+1
                    break
                }
            }
            this.arr[index] = current;
            console.log(`gan gia tri da luu cho vi tri ${index} \n`)
        }
    }
}