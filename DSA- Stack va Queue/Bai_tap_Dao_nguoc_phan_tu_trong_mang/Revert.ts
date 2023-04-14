import {Stack} from "./Stack";

export function revert(arr:number[]){
    let stack = new Stack()
    arr.forEach(e=>stack.push(e))
    let revertedStack = new Stack()
    for (let i = 0; i < stack.size(); i++) {
        revertedStack.push(stack.pop())
    }
    return revertedStack.container
}