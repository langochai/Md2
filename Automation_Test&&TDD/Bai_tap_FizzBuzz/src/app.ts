export class FizzBuzzTranslate{
    inputNumber:number;

    constructor(inputNumber: number) {
        this.inputNumber = inputNumber;
    }
    translate(){
        const isFizz:boolean = (this.inputNumber%3===0)
        const isBuzz:boolean = (this.inputNumber%5===0)
        const isFizzBuzz:boolean = (this.inputNumber%15===0)
        if(isFizzBuzz) return 'FizzBuzz'
        else if(isFizz) return 'Fizz'
        else if(isBuzz) return 'Buzz'
        else return String(this.inputNumber)
    }
}