"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Salary_1 = require("./Salary");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstInList = function (month, money) {
        var node = new Salary_1.Salary(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastInList = function (month, money) {
        if (!this.head) {
            this.insertFirstInList(month, money);
        }
        else {
            var node = new Salary_1.Salary(month, money);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.getSizeOfList = function () {
        return this.size;
    };
    LinkedList.prototype.readList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            listData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.totalSalary = function () {
        var totalSalary = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            totalSalary += currentNode.money;
            currentNode = currentNode.next;
        }
        return totalSalary;
    };
    LinkedList.prototype.mothWithHighestSalary = function () {
        var moneyList = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            moneyList.push(currentNode.money);
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        var highestSalary = Math.max.apply(Math, moneyList);
        while (currentNode !== null) {
            if (currentNode.money === highestSalary) {
                return currentNode.month;
            }
            currentNode = currentNode.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
