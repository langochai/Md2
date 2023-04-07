import {Shape} from "./Shape";

class Triangle extends Shape {
    _side1: number;
    _side2: number;
    _side3: number;
    name: string;
    color: string;

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
        this.name = name;
        this.color = color;
    }

    get side1(): number {
        return this._side1;
    }

    set side1(value: number) {
        this._side1 = value;
    }

    get side2(): number {
        return this._side2;
    }

    set side2(value: number) {
        this._side2 = value;
    }

    get side3(): number {
        return this._side3;
    }

    set side3(value: number) {
        this._side3 = value;
    }
    getPerimeter():number{
        return (this._side1+this._side2+this._side3)
    }
    getArea():number{
        let p = this.getPerimeter() / 2
        return (Math.sqrt(p * (p-this._side1)*(p-this._side2)*(p-this._side3)))
    }
}

let tamgiac = new Triangle('tamgic','blue',3,4,5)
console.log(tamgiac.getArea())