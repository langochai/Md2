import {Salary} from "./Salary";
import {Student} from "../Bai_tap_Quan_ly_sinh_vien/Student";

export class LinkedList<T> {
    head: Salary<T> | null;
    tail: Salary<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    insertFirstInList(month: string, money: number): void {
        let node = new Salary(month, money);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }
    insertLastInList(month: string, money: number): void {
        if (!this.head){
            this.insertFirstInList(month, money);
        }else {
            let node = new Salary(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    }
    getSizeOfList() : number{
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
    totalSalary():number{
        let totalSalary: number = 0

        let currentNode = this.head
        while (currentNode!==null){
            totalSalary += currentNode.money
            currentNode = currentNode.next
        }
        return totalSalary
    }
    mothWithHighestSalary():string{
        let moneyList: number[] = []

        let currentNode = this.head
        while (currentNode!==null){
            moneyList.push(currentNode.money)
            currentNode = currentNode.next
        }
        currentNode=this.head

        let highestSalary = Math.max(...moneyList)
        while (currentNode!==null){
            if(currentNode.money===highestSalary){
                return currentNode.month
            }
            currentNode = currentNode.next
        }
    }
}