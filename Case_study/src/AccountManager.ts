import {Admin} from "./Admin";
import {Authority, Employee} from "./Employee";

export class AccountManager {
    list: (Admin | Employee) []

    constructor() {
        this.list = [];
    }

    validName(name: string): boolean {
        let nameRegex: RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        return nameRegex.test(name)
    }

    validPassword(password: string): boolean {
        let passwordRegex: RegExp = /^[A-Za-z]{2}[0-9]{2}$/
        return passwordRegex.test(password)
    }

    validAcc(username: string, password: string): Employee {
        let nameRegex: RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        let passwordRegex: RegExp = /^[A-Za-z]{2}[0-9]{2}$/
        if (nameRegex.test(username) && passwordRegex.test(password)) return new Employee(username, password)
    }

    add(account: Admin | Employee): void {
        this.list.push(account)
    }

    get(username: string): Admin | Employee {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].getName() == username) {
                return this.list[i]
            }
        }
    }

    remove(username: string): void {
        let index: number
        this.list.forEach((e, i) => {
            if (e.username == username) index = i
        })
        this.list.splice(index, 1)
    }

    showListForAnyone() {
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username} = this.list[i]
            list.push({username})
        }
        console.table(list)
    }

    showListForEmployee() {
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username, authority} = this.list[i]
            list.push({username, authority})
        }
        console.table(list)
    }

    showListForAdmin() {
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username, password, authority} = this.list[i]
            list.push({username, password, authority})
        }
        console.table(list)
    }

    size(): number {
        return this.list.length;
    }

    changeUserName(userName: string, newUserName: string) {
        let account = this.get(userName)
        if (!this.list.includes(this.get(newUserName))) account.username = newUserName
    }

    changePassword(userName: string, password: string) {
        let account = this.get(userName)
        account.setPassword(password)
    }

    changeAuthority(username: string, authority: Authority) {
        let account = this.get(username)
        account.setAuthority(authority)
    }
}