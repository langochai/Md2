export class Stack<T> {
    container: T[] = [];

    constructor() {
    }

    push(data: T) {
        this.container.push(data)
    }

    pop(): T {
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }


}
