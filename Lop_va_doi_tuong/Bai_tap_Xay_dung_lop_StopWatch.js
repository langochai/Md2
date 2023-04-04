class StopWatch{
    start = new Date().getTime()
    end
    constructor() {
    }
    startW(){
        this.start = new Date().getTime()
    }
    endW(){
        this.end = new Date().getTime()
    }
    getElapsedTime(){
        return (this.end - this.start)
    }
}
let watch1 = new StopWatch()


function selectionSort(arr) {
    let currentValueNewIndex;
    for (let i = 0; i < arr.length; i++) {
        currentValueNewIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[currentValueNewIndex] > arr[j]) {
                currentValueNewIndex = j;
            }
        }
        if (i !== currentValueNewIndex) {
            let temp = arr[i];
            arr[i] = arr[currentValueNewIndex];
            arr[currentValueNewIndex] = temp;
        }
    }

    return arr;
}
const arr = [];
for (let i=0; i<100000; i++) {
    arr.push(Math.floor(Math.random() * 100000 + 1));
}



watch1.startW()
console.log(selectionSort(arr));
watch1.endW()
console.log(watch1.getElapsedTime())