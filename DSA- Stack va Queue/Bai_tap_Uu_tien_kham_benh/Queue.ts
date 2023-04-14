import {Patient} from "./Patient";

export class Queue {
    container:Patient[] = [];

    constructor() {
    }


    enqueue(item: Patient): void {
        this.container.push(item);
    }

    dequeue(): Patient {
        let result: Patient
        let sortedCode:number[] = []
        this.container.forEach(e=>sortedCode.push(e._code))
        sortedCode.sort((a,b)=>a-b)
        for (let i = 0; i < this.container.length; i++) {
            if(this.container[i]._code === sortedCode[0]){
                result = this.container[i]
                this.container.splice(i,1)
                break
            }
        }
        return result
    }

    size(): number {
        return this.container.length
    }

    showList() :Patient[]{
        return this.container
    }
}
