export class FizzBuzz {
    message: string;

    constructor(n: number) {
        if (n % 3 == 0 && n % 5 == 0) {
            this.message = 'FizzBuzz';
        } else if (n % 5 == 0) {
            this.message = 'Fizz';
        } else if(n % 3 == 0) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}
