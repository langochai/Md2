"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revert = void 0;
var Stack_1 = require("./Stack");
function revert(arr) {
    var stack = new Stack_1.Stack();
    arr.forEach(function (e) { return stack.push(e); });
    var revertedStack = new Stack_1.Stack();
    for (var i = 0; i < stack.size(); i++) {
        revertedStack.push(stack.pop());
    }
    return revertedStack.container;
}
exports.revert = revert;
