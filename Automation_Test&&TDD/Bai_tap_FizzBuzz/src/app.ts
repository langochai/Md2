export class FizzBuzzTranslate{
    inputNumber:number;

    constructor(inputNumber: number) {
        this.inputNumber = inputNumber;
    }
    translate(){
        let convertedToString:string = String(this.inputNumber)
        let convertedToArray:string[] = convertedToString.split('')

        const hasNumber3: boolean = convertedToString.includes('3')&&!convertedToString.includes('5')
        const hasNumber5: boolean = convertedToString.includes('5')&&!convertedToString.includes('3')
        const hasBothNumber: boolean = convertedToString.includes('3')&&convertedToString.includes('5')

        const isFizz:boolean = (this.inputNumber%3===0)
        const isBuzz:boolean = (this.inputNumber%5===0)
        const isFizzBuzz:boolean = (this.inputNumber%15===0)

        if(isFizzBuzz || hasBothNumber) return 'FizzBuzz'
        else if(isFizz || hasNumber3) return 'Fizz'
        else if(isBuzz || hasNumber5) return 'Buzz'
        else {
            let result:string[] = []
            convertedToArray.forEach(e=>{
                switch (e){
                    case '0':
                        result.push('khong')
                        break
                    case '1':
                        result.push('mot')
                        break
                    case '2':
                        result.push('hai')
                        break
                    case '3':
                        result.push('ba')
                        break
                    case '4':
                        result.push('bon')
                        break
                    case '5':
                        result.push('nam')
                        break
                    case '6':
                        result.push('sau')
                        break
                    case '7':
                        result.push('bay')
                        break
                    case '8':
                        result.push('tam')
                        break
                    case '9':
                        result.push('chin')
                        break
                }
            })
            return result.join(' ')
        }
    }
}