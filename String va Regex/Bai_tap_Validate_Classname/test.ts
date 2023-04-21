import {ClassNameRegex} from "./ClassNameRegex";

let classNameRegex = new ClassNameRegex()
let validName:string = "C0233G"
let invalidName:string ="bruh"
console.log(classNameRegex.validate(validName))
console.log(classNameRegex.validate(invalidName))