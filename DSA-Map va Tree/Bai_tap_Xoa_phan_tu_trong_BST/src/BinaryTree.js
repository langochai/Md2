"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var TreeNode_1 = require("./TreeNode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.searchNode = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (currentNode.data === value) {
                return currentNode;
            }
            if (value > currentNode.data) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        console.log('khong tim thay');
        return null;
    };
    // @ts-ignore
    BinaryTree.prototype.inorder = function (value) {
        var node = this.searchNode(value);
        if (node) {
            console.log(node.data);
            if (node.left) {
                // @ts-ignore
                this.inorder(node.left);
            }
            if (node.right) {
                // @ts-ignore
                this.inorder(node.right);
            }
        }
    };
    BinaryTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new TreeNode_1.TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new TreeNode_1.TreeNode(data);
            var currentNode = this.root;
            while (currentNode) {
                /* so sánh giá trị currentNode với data */
                if (data < currentNode.data) {
                    /* nếu currentNode không có phần tử bên trái thì gán bên trái của
                        currentNode bằng node cần thêm
                     */
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên trái */
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    /* gán lại currentNode cho node bên phải */
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    };
    BinaryTree.prototype.findParent = function (value) {
        var parentNode = this.root;
        while (parentNode) {
            if (parentNode.left && parentNode.left.data === value) {
                return parentNode;
            }
            else if (parentNode.right && parentNode.right.data === value) {
                return parentNode;
            }
            if (value > parentNode.right.data || value > parentNode.data && value < parentNode.right.data) {
                parentNode = parentNode.right;
            }
            if (value < parentNode.left.data || value < parentNode.data && value > parentNode.left.data) {
                parentNode = parentNode.left;
            }
        }
        return null;
    };
    BinaryTree.prototype.deleteNode = function (value) {
        var currentNode = this.searchNode(value);
        if (currentNode) {
            if (!currentNode.left) {
                var parentNode = this.findParent(value);
                if (parentNode.left && parentNode.left.data === currentNode.data) {
                    parentNode.left = currentNode.right;
                    this.totalNode--;
                }
                else if (parentNode.right && parentNode.right.data === currentNode.data) {
                    parentNode.right = currentNode.right;
                    this.totalNode--;
                }
            }
            else {
                var rightMost = currentNode.left;
                while (rightMost.right) {
                    rightMost = rightMost.right;
                }
                var parentOfRightMost = this.findParent(rightMost.data);
                if (rightMost.left)
                    parentOfRightMost.right = rightMost.left;
                currentNode.data = rightMost.data;
                this.totalNode--;
            }
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
