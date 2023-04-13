import {LinkedList} from "./LinkedList";

let linkedList = new LinkedList();
linkedList.insertFirstInList('thang mot', 10)
linkedList.insertLastInList('thang hai',20)
linkedList.insertLastInList('thang ba',30)
linkedList.insertLastInList('thang tu',20)
linkedList.insertLastInList('thang nam',50)
linkedList.insertLastInList('thang sau',30)

console.log(linkedList.totalSalary())
console.log(linkedList.mothWithHighestSalary())