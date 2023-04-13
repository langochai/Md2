"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Salary = void 0;
var Salary = /** @class */ (function () {
    function Salary(month, money) {
        this.next = null;
        this.month = month;
        this.money = money;
    }
    Salary.prototype.readData = function () {
        return [this.month, this.money];
    };
    return Salary;
}());
exports.Salary = Salary;
