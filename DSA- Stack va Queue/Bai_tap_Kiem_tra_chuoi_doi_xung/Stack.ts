export class Stack {
    container: string[] = [];

    constructor() {
    }

    push(data: string) {
        this.container.push(...data.split(''))
    }

    pop(): string|undefined {
        return this.container.pop();
    }

    size(): number {
        return this.container.length;
    }


}
