import {Employee} from "./Employee";

export class EmployeeManager {
    static employeeList: Employee[] = [];

    constructor() {
    }

    static add(employee: Employee) {
        EmployeeManager.employeeList.push(employee)
    }

    static getEmployeeList() {
        return EmployeeManager.employeeList
    }

    static delete(id: number) {
        EmployeeManager.employeeList.forEach((e, index) => {
            if (e.id === id) {
                EmployeeManager.employeeList.splice(index, 1)
            }
        })
    }

    static update(id: number, lastname: string) {
        EmployeeManager.employeeList.forEach((e) => {
            if (e.id === id) {
                e.setLastname(lastname)
            }
        })
    }
}