class StopWatch{
    start = new Date()
    end
    constructor() {
    }
    startW(){
        this.start = new Date()
    }
    endW(){
        this.end = new Date()
    }
    getElapsedTime(){
        return (this.end - this.start)
    }
}
let watch1 = new StopWatch()
watch1.startW()
watch1.endW()
console.log(watch1.getElapsedTime())