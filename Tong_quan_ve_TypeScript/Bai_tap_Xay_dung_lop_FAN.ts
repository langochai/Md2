class Fan{
    // SLOW : number = 1;
    // MEDIUM : number = 2;
    // FAST : number = 3;
    _Speed : number = 1
    _Status : boolean = false
    _Radius : number = 5
    _Color : string = 'blue'
    constructor() {
    }

    getSpeed(): number {
        return this._Speed;
    }

    setSpeed(value: number) {
        this._Speed = value;
    }

    getStatus(): boolean {
        return this._Status;
    }

    setStatus(value: boolean) {
        this._Status = value;
    }

    getRadius(): number {
        return this._Radius;
    }

    setRadius(value: number) {
        this._Radius = value;
    }

    getColor(): string {
        return this._Color;
    }

    setColor(value: string) {
        this._Color = value;
    }
    toString(){
        console.log(this._Speed)
        console.log(this._Color)
        console.log(this._Radius)
        if(this._Status){
            console.log('on')
        } else {
            console.log('off')
        }
    }
}
// Đối tượng Fan 1: Gán giá trị lớn nhất cho speed, radius là 10, color là yellow và quạt ở trạng thái bật.
// Đối tượng Fan 2: Gán giá trị trung bình cho speed, radius là 5, color là blue và quạt ở trạng thái tắt.
let fan1 = new Fan()
fan1.setSpeed(3)
fan1.setRadius(10)
fan1.setColor('yellow')
fan1.setStatus(true)
let fan2 = new Fan()
fan2.setSpeed(2)