import {BubbleSort} from "./BubbleSort";
import {SelectionSort} from "./SelectionSort";
import {InsertionSort} from "./InsertionSort";

let arr = [1,3,5,4,2,6]

// let bubble = new BubbleSort(arr)
// bubble.bubbleSort()
//
// let select = new SelectionSort(arr)
// select.selectionSort()

let insert = new InsertionSort(arr)
insert.insertionSort()