export class Stack {
    container: number[] = [];

    constructor() {
    }

    push(data: number) {
        this.container.push(data)
    }

    pop(): number | undefined {
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }

}
