"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.insertFirstNode({ name: 'bruh', score: 8 });
linkedList.insertLastNode({ name: 'wtf', score: 2 });
linkedList.insertLastNode({ name: 'what', score: 10 });
linkedList.insertFirstNode({ name: 'geh', score: 10 });
linkedList.insertFirstNode({ name: 'bruh', score: 15 });
// console.log(linkedList.listStudentMaxScore())
console.log(linkedList.findByName('bruh'));
