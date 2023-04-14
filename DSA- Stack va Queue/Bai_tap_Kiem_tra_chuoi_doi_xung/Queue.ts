export class Queue {
    container: string[] = [];

    constructor() {
    }


    enqueue(item: string): void {
        this.container.push(...item.split(''));
    }

    dequeue(): string | undefined {
        return this.container.shift();
    }

    size(): number {
        return this.container.length
    }
}
