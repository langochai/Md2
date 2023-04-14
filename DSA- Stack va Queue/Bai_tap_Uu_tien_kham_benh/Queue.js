"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue() {
        this.container = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.container.push(item);
    };
    Queue.prototype.dequeue = function () {
        var result;
        var sortedCode = [];
        this.container.forEach(function (e) { return sortedCode.push(e._code); });
        sortedCode.sort(function (a, b) { return a - b; });
        for (var i = 0; i < this.container.length; i++) {
            if (this.container[i]._code === sortedCode[0]) {
                result = this.container[i];
                this.container.splice(i, 1);
                break;
            }
        }
        return result;
    };
    Queue.prototype.size = function () {
        return this.container.length;
    };
    Queue.prototype.showList = function () {
        return this.container;
    };
    return Queue;
}());
exports.Queue = Queue;
