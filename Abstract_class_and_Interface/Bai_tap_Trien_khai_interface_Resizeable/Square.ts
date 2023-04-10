import {Rectangle} from "./Rectangle";
import {Resizeable} from "./interface";

export class Square extends Rectangle implements Resizeable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
    resize(percent: number) {
        this.width = this.width * percent /100
        this.height = this.height * percent /100
    }
}