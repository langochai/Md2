import {Admin} from "./src/Admin";
import {Employee} from "./src/Employee";
import {AccountManager} from "./src/AccountManager";

let list = new AccountManager()

let admin = new Admin("hai", "abc")
admin.setList(list)
let e1 = new Employee("a", "a")

list.add(admin)
list.add(e1)
var readlineSync = require('readline-sync');

function main() {
    console.log(`Press a number to pick an option:`)
    let option: string[] = ["Show list of accounts", "Log in", "Create new account"]
    let index = readlineSync.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            list.showListForAnyone()
            returnToMainMenu()
            break
        case 1:
            let username = readlineSync.question("Please enter username here:")
            let account = list.get(username)
            let password = readlineSync.question("Please enter password here:",{hideEchoBack:true})
            if (password == account.getPassword()) {
                console.log(`Welcome ${username}!`)
                if (account.authority == "Admin") {
                    let option: string[] = ["Show list of accounts as admin", "Set authority for an account",
                        "Change password for an account", "Change username for an account", "Search for an account",
                        "Delete an account"]
                    let index = readlineSync.keyInSelect(option, 'Please choose:')
                    switch (index) {
                        case 0:
                            list.showListForAdmin()
                            returnToMainMenu()
                            break
                        case 1:
                            let nameForAu = readlineSync.question(`Enter username:`)
                            if (readlineSync.keyInYN(`press Y for "Admin", press N for "Employee"`)) {
                                list.changeAuthority(nameForAu,"Admin")
                            } else {
                                list.changeAuthority(nameForAu,"Employee")
                            }
                            returnToMainMenu()
                            break
                        case 2:
                            let nameForPW = readlineSync.question(`Enter username:`)
                            let newPassword = readlineSync.question(`Enter new password:`,{hideEchoBack:true})
                            list.changePassword(nameForPW,newPassword)
                            returnToMainMenu()
                            break
                        case 3:
                            let nameForUsername = readlineSync.question(`Enter username:`)
                            let newUsername = readlineSync.question(`Enter new username:`)
                            list.changeUserName(nameForUsername,newUsername)
                            returnToMainMenu()
                            break
                        case 4:
                            let nameForSearch = readlineSync.question(`Enter username:`)
                            console.table(list.get(nameForSearch))
                            returnToMainMenu()
                            break
                        case 5:
                            let nameForDelete = readlineSync.question(`Enter username:`)
                            list.remove(nameForDelete)
                            returnToMainMenu()
                            break
                        default:
                            main()
                    }
                } else {
                    let option: string[] = ["Show list of accounts as employee", "Change username", "Change password"]
                    let index = readlineSync.keyInSelect(option, 'Please choose:')
                    switch (index) {
                        case 0:
                            list.showListForEmployee()
                            returnToMainMenu()
                            break
                        case 1:
                            let nameForUsername = readlineSync.question(`Enter username:`)
                            let newUsername = readlineSync.question(`Enter new username:`)
                            list.changeUserName(nameForUsername,newUsername)
                            returnToMainMenu()
                            break
                        case 2:
                            let nameForPW = readlineSync.question(`Enter username:`)
                            let newPassword = readlineSync.question(`Enter new password:`,{hideEchoBack:true})
                            list.changePassword(nameForPW,newPassword)
                            returnToMainMenu()
                            break
                        default:
                            main()
                    }
                }
            } else {
                console.log(`Wrong password. Return to main menu`)
                main()
            }
            break
        case 2:
            let newUsername = readlineSync.question(`Enter username for new account:`)
            let passwordForNewAcc = readlineSync.question(`Enter password for new account:`)
            let newEmployee = new Employee(newUsername,passwordForNewAcc)
            list.add(newEmployee)
            break
        default:
            main()
    }
}
function returnToMainMenu(){
    if (readlineSync.keyInYN('Do you wanna return to main menu?')) {
        main()
    } else {
        console.log(`then why picked this option? wtf?`)
    }
}
main()