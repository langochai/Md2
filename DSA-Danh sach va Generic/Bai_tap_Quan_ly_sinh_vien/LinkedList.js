"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirstNode = function (data) {
        var node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirstNode(data);
        }
        else {
            var node = new Node_1.Node(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkedList.prototype.getSize = function () {
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
    LinkedList.prototype.totalFailed = function () {
        var count = 0;
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.score <= 5) {
                count++;
            }
            currentNode = currentNode.next;
        }
        return count;
    };
    LinkedList.prototype.listStudentMaxScore = function () {
        var scoreList = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            scoreList.push(currentNode.data.score);
            currentNode = currentNode.next;
        }
        currentNode = this.head;
        var maxScore = Math.max.apply(Math, scoreList);
        var maxScoreStudentList = [];
        while (currentNode !== null) {
            if (currentNode.data.score === maxScore) {
                maxScoreStudentList.push(currentNode.data);
            }
            currentNode = currentNode.next;
        }
        return maxScoreStudentList;
    };
    LinkedList.prototype.findByName = function (name) {
        var studentWithInputName = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.data.name === name) {
                studentWithInputName.push(currentNode.data);
            }
            currentNode = currentNode.next;
        }
        return studentWithInputName;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
