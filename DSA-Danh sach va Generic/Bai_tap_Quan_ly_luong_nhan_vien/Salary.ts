export class Salary<T> {
    month: string;
    money: number;
    next: Salary<T> | null = null;

    constructor(month: string, money: number) {
        this.month = month;
        this.money = money;
    }

    readData(): [string,number] {
        return [this.month,this.money];
    }
}