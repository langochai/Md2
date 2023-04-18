import {Tree} from "../interface/Tree";
import {TreeNode} from "./TreeNode";

export class BinaryTree<E> implements Tree<E> {
    root: TreeNode<E> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        return this.totalNode
    }

    searchNode(value: E) {
        let currentNode = this.root
        while (currentNode) {
            if (currentNode.data === value) {
                return currentNode
            }
            if (value > currentNode.data) {
                currentNode = currentNode.right
            } else {
                currentNode = currentNode.left
            }
        }
        console.log('khong tim thay')
        return null
    }

    // @ts-ignore
    preorder(node: TreeNode<E>): void {
        if (node) {
            console.log(node.data)
            if (node.left) {
                this.preorder(node.left)
            }
            if (node.right) {
                this.preorder(node.right)
            }
        }
    }

    insert(data: E): TreeNode<E> {
        if (!this.root) {
            this.root = new TreeNode<E>(data);
            this.totalNode++;
            return this.root;
        } else {
            let node = new TreeNode<E>(data);
            let currentNode = this.root;

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

                } else if (data > currentNode.data) {
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
    }

    findParent(value: E) {
        let parentNode = this.root
        while (parentNode) {
            if (parentNode.left && parentNode.left.data === value) {
                return parentNode
            } else if (parentNode.right && parentNode.right.data === value) {
                return parentNode
            }
            if (value > parentNode.right.data || value > parentNode.data && value < parentNode.right.data) {
                parentNode = parentNode.right
            }
            if (value < parentNode.left.data || value < parentNode.data && value > parentNode.left.data) {
                parentNode = parentNode.left
            }
        }
        return null
    }

    deleteNode(value: E) {
        let currentNode = this.searchNode(value);
        if (currentNode) {
            if (!currentNode.left) {
                if(currentNode.data === this.root.data){
                    if(!currentNode.right){
                        currentNode.data = null
                        this.totalNode--
                    } else {
                        currentNode.data = this.root.right.data
                        if (this.root.right.left) currentNode.left = this.root.right.left
                        if (this.root.right.right) currentNode.right = this.root.right.right
                        this.totalNode--
                    }
                } else {
                    let parentNode = this.findParent(value)
                    if (parentNode.left && parentNode.left.data === currentNode.data) {
                        parentNode.left = currentNode.right
                        this.totalNode--
                    } else if (parentNode.right && parentNode.right.data === currentNode.data) {
                        parentNode.right = currentNode.right
                        this.totalNode--
                    }
                }
            } else {
                let rightMost = currentNode.left
                while (rightMost.right) {
                    rightMost = rightMost.right
                }
                let parentOfRightMost = this.findParent(rightMost.data)
                if (currentNode.left.data === rightMost.data) {
                    currentNode.data = rightMost.data
                    if (rightMost.left) {
                        currentNode.left = rightMost.left
                    } else {
                        currentNode.left = null
                    }
                } else {
                    currentNode.data = rightMost.data
                    if (rightMost.left) {
                        parentOfRightMost.right = rightMost.left
                    } else {
                        parentOfRightMost.right = null
                    }
                }
                this.totalNode--
            }
        }
    }
}
