import {Patient} from "./Patient";
import {Queue} from "./Queue";

let queue = new Queue()

let patient1 = new Patient('Smith',5)
queue.enqueue(patient1)
let patient2 = new Patient('Jones',4)
queue.enqueue(patient2)
let patient3 = new Patient('Fehrenbach',6)
queue.enqueue(patient3)
let patient4 = new Patient('Brown',1)
queue.enqueue(patient4)
let patient5 = new Patient('Ingram',1)
queue.enqueue(patient5)

console.log(queue.showList())
console.log('')
console.log('')
console.log(queue.dequeue())
console.log(queue.showList())
console.log('')
console.log('')
console.log(queue.dequeue())
console.log(queue.showList())
console.log('')
console.log('')
console.log(queue.dequeue())
console.log(queue.showList())
