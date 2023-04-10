import {Circle} from "./Circle";
import {Resizeable} from "./interface";

export class Cylinder extends Circle implements Resizeable{
    height: number;

    constructor(name: string,
                radius: number,
                height: number) {
        super(name, radius);
        this.height = height;
    }

    calculateArea(): number {
        return super.calculateArea() * 2 + super.calculatePerimeter() * this.height;
    }

    calculateVolume(): number {
        return super.calculateArea() * this.height;
    }
    resize(percent: number) {
        this.radius = this.radius * percent / 100
        this.height = this.height * percent / 100
    }
}