import {BinaryTree} from "./src/BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(20)
tree.insert(10)
tree.insert(40)
tree.insert(16)
tree.insert(14)
// console.log(tree.findParent(16))
tree.deleteNode(20)
console.log(tree)
