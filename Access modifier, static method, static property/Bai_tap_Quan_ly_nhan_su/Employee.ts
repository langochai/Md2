/*Thông tin của một nhân sự bao gồm:

    Họ
    Tên
    Ngày sinh
    Địa chỉ
    Vị trí công việc
*/

// import {EmployeeManager} from "./EmployeeManager";

export class Employee {
    static id: number = 1;
    id : number
    lastname: string;
    firstname: string;
    birthday: string;
    address: string;
    workplace: string;

    constructor(lastname: string, firstname: string, birthday: string, address: string, workplace: string) {
        this.id = Employee.id
        this.lastname = lastname;
        this.firstname = firstname;
        this.birthday = birthday;
        this.address = address;
        this.workplace = workplace;
        Employee.id++
    }

    setLastname(lastname: string) {
        this.lastname = lastname
    }
}