import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let nam = new Employee( 'le', 'nam', '1/2/3', 'bruh', 'oof')
let nu = new Employee( 'vu', 'nu', '1/2/3', 'bruh', 'oof')

EmployeeManager.add(nam)
EmployeeManager.add(nu)
EmployeeManager.update(1,'la')
EmployeeManager.update(2,'nguyen')
console.log(EmployeeManager.getEmployeeList())