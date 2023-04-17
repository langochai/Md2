import {TreeNode} from "../src/TreeNode";

export interface Tree<E> {
    insert(data: E): TreeNode<E>;
    preorder(node: TreeNode<E>): void;
    getSize(): number;
}