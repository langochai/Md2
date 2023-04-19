import {InsertionSort} from "./InsertionSort";

let arr:number[] = [6,4,1,3,5,7,2,9,8,10]
let insert = new InsertionSort(arr)
insert.insertionSort()
console.log(insert.arr)