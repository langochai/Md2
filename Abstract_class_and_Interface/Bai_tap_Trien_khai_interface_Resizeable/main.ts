import {Square} from "./Square";

let square = new Square('square',10)
console.log(square.calculateArea())
square.resize(50)
console.log(square.calculateArea())