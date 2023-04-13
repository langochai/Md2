import {Node} from "./Node";
import {Student} from "./Student";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirstNode(data: Student): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }
    insertLastNode(data: Student): void {
        if (!this.head){
            this.insertFirstNode(data);
        }else {
            let node = new Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    getSize() : number{
        return this.size;
    }
    readList(): T[] {
        let listData = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next
        }
        return listData;
    }
    totalFailed():number{
        let count:number = 0;
        let currentNode = this.head
        while(currentNode!==null){
            if(currentNode.data.score<=5){
                count++
            }
            currentNode = currentNode.next
        }
        return count
    }
    listStudentMaxScore() : Student[]{
        let scoreList: number[] = []

        let currentNode = this.head
        while (currentNode!==null){
            scoreList.push(currentNode.data.score)
            currentNode = currentNode.next
        }
        currentNode=this.head

        let maxScore = Math.max(...scoreList)
        let maxScoreStudentList: Student[] = []
        while (currentNode!==null){
            if(currentNode.data.score===maxScore){
                maxScoreStudentList.push(currentNode.data)
            }
            currentNode = currentNode.next
        }
        return maxScoreStudentList
    }
    findByName(name:string):Student[]{
        let studentWithInputName:Student[] = []
        let currentNode = this.head
        while (currentNode!==null){
            if(currentNode.data.name === name){
                studentWithInputName.push(currentNode.data)
            }
            currentNode = currentNode.next
        }
        return studentWithInputName
    }
}