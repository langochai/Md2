import {Admin} from "./Admin";
import {Authority, Employee} from "./Employee";

export class AccountManager {
    list: (Admin | Employee) []

    constructor() {
        this.list = [];
    }

    add(account: Admin | Employee): void {
        if(!this.list.includes(account))
        this.list.push(account)
    }

    get(username:string): Admin | Employee {
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].getName() == username){
                return this.list[i]
            }
        }
    }

    remove(username:string): void {
        let index: number
        this.list.forEach((e,i) => {
            if(e.username == username)  index = i
        })
        this.list.splice(index,1)
    }
    showListForAnyone(){
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username} = this.list[i]
            list.push({username})
        }
        console.table(list)
    }
    showListForEmployee(){
        let list: Object[] = []
        for (let i = 0; i < this.list.length; i++) {
            let {username,authority} = this.list[i]
            list.push({username,authority})
        }
        console.table(list)
    }
    showListForAdmin(){
        console.table(this.list)
    }

    size(): number {
        return this.list.length;
    }
    changeUserName(userName:string, newUserName:string){
        let account = this.get(userName)
        if(!this.list.includes(this.get(newUserName))) account.username = newUserName
    }
    changePassword(userName:string, password:string){
        let account = this.get(userName)
        account.setPassword(password)
    }
    changeAuthority(username:string, authority:Authority){
        let account = this.get(username)
        account.setAuthority(authority)
    }
}