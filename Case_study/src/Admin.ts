import {Employee} from "./Employee";
import {Authority} from "./Employee";
import {AccountManager} from "./AccountManager";

export class Admin extends Employee{
    private list:AccountManager
    constructor(username: string, password: string) {
        super(username, password);
        this.authority = "Admin"
    }

    setAuthority(authority: Authority) {
       this.authority = authority
    }

    setPassword(password: string) {
        this.password = password
    }
    setName(username: string) {
        super.setName(username);
    }

    getAuthority(): "Admin" | "Employee" {
        return this.authority
    }

    getPassword(): string {
        return this.password
    }
    getName(): string {
        return super.getName();
    }

    setList(list:AccountManager){
        this.list = list
    }
}