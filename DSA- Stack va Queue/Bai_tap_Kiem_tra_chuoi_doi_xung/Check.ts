import {Stack} from "./Stack";
import {Queue} from "./Queue";

export function check(inputString:string) : string{
    let stack = new Stack()
    let queue = new Queue()
    stack.push(inputString)
    queue.enqueue(inputString)
    for (let i = 0; i <stack.size(); i++) {
        if(stack.pop() !== queue.dequeue()){
            return 'khong doi xung'
        }
    }
    return 'doi xung'
}