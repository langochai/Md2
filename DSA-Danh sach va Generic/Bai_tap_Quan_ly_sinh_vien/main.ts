import {LinkedList} from "./LinkedList";

let linkedList = new LinkedList();
linkedList.insertFirstNode({name:'bruh',score:8});
linkedList.insertLastNode({name:'wtf',score:2});
linkedList.insertLastNode({name:'what',score:10});
linkedList.insertFirstNode({name:'geh',score:10});
linkedList.insertFirstNode({name:'bruh',score:15});

console.log(linkedList.totalFailed())
console.log(linkedList.listStudentMaxScore())
console.log(linkedList.findByName('bruh'))