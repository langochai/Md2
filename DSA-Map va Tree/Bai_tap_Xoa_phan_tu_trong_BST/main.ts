import {BinaryTree} from "./src/BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(50)
tree.insert(40)
tree.insert(60)
tree.insert(30)
tree.insert(42)
tree.insert(55)
tree.insert(65)
tree.deleteNode(50)
tree.deleteNode(42)
console.log(tree)
