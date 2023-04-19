import {BubbleSort} from "./BubbleSort";

let arr:number[] = [1,1,2,2,3,4,4,6,7,8,9,0,0,8,6,5,4,4,3,3,2,3,5,6,7,8,2,2,3,5,6,7,8,9]
let bubble = new BubbleSort(arr)
bubble.bubbleSort()
console.log(bubble.arr)