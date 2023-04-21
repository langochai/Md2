import {Admin} from "./src/Admin";
import {Employee} from "./src/Employee";
import {AccountManager} from "./src/AccountManager";


let list = new AccountManager()

let admin = new Admin("hai", "abc")
admin.setList(list)
let e1 = new Employee("aa@gmail.com", "aa11")
list.add(admin)
list.add(e1)

let readlineSync = require('readline-sync');

function main() {
    console.log(`Press a number to pick an option:`)
    let option: string[] = ["Show list of accounts", "Log in", "Create new account"]
    let index = readlineSync.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            list.showListForAnyone()
            mainMenu()
            break
        case 1:

            let username = readlineSync.question("Please enter username here:")
            let account = list.get(username)
            if (account) {
                let password = readlineSync.question("Please enter password here:", {hideEchoBack: true})
                if (password == account.getPassword()) {
                    console.log(`Welcome ${username}!`)
                    if (account.authority == "Admin") {
                        menuForAdmin()
                    } else {
                        menuForEmployee(username)
                    }
                } else {
                    console.log(`Wrong password. Return to main menu`)
                    mainMenu()
                }
            } else {
                console.log(`Can not find username`)
                mainMenu()
            }
            break
        case 2:
            let newUsername = readlineSync.question(`Enter username for new account:`)
            let passwordForNewAcc = readlineSync.question(`Enter password for new account:`, {hideEchoBack: true})
            let newEmployee = list.validAcc(newUsername, passwordForNewAcc)
            if (!newEmployee) {
                console.log(`Invalid input!`)
                mainMenu()
            } else if (list.get(newUsername)) {
                console.log(`Account existed!`)
                mainMenu()
            } else {
                list.add(newEmployee)
                console.log(`Add!`)
                mainMenu()
            }
            break
        default:
            console.log(`Goodbye!`)
    }
}

function mainMenu() {
    if (readlineSync.keyInYN('Do you wanna return to main menu?')) {
        main()
    }
}
function menuForAdmin(){
    let option: string[] = ["Show list of accounts as admin", "Set authority for an account",
        "Change password for an account", "Change username for an account", "Search for an account",
        "Delete an account"]
    let index = readlineSync.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            list.showListForAdmin()
            mainMenuOrAdminMenu()
            break
        case 1:
            let nameForAu = readlineSync.question(`Enter username:`)
            let checkNameForAu = list.get(nameForAu)
            if (checkNameForAu) {
                if (readlineSync.keyInYN(`press Y for "Admin", press N for "Employee"`)) {
                    list.changeAuthority(nameForAu, "Admin")
                } else {
                    list.changeAuthority(nameForAu, "Employee")
                }
            } else {
                console.log(`Cannot find this username`)
            }
            mainMenuOrAdminMenu()
            break
        case 2:
            let nameForPW = readlineSync.question(`Enter username:`)
            let checkNameForPW = list.get(nameForPW)
            if (checkNameForPW) {
                let newPassword = readlineSync.question(`Enter new password:`, {hideEchoBack: true})
                let validAccForNewPW = list.validAcc(nameForPW, newPassword)
                if (validAccForNewPW) {
                    list.changePassword(nameForPW, newPassword)
                } else {
                    console.log(`Wrong username/password input`)
                }
            } else {
                console.log(`Cannot find this username`)
            }
            mainMenuOrAdminMenu()
            break
        case 3:
            let newNameForName = readlineSync.question(`Enter username:`)
            let checkNameForName = list.get(newNameForName)
            if (checkNameForName) {
                let newUsername = readlineSync.question(`Enter new username:`)
                let validAccForNewName = list.validAcc(newNameForName, newUsername)
                if (validAccForNewName) {
                    list.changeUserName(newNameForName, newUsername)
                } else {
                    console.log(`Wrong username input`)
                }
            } else {
                console.log(`Cannot find this username`)
            }
            mainMenuOrAdminMenu()
            break
        case 4:
            let nameForSearch = readlineSync.question(`Enter username:`)
            console.table(list.get(nameForSearch))
            mainMenuOrAdminMenu()
            break
        case 5:
            let nameForDelete = readlineSync.question(`Enter username:`)
            list.remove(nameForDelete)
            mainMenuOrAdminMenu()
            break
        default:
            main()
    }
}
function menuForEmployee(username){
    let option: string[] = ["Show list of accounts as employee", "Change username", "Change password"]
    let index = readlineSync.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            list.showListForEmployee()
            mainMenuOrEmployeeMenu(username)
            break
        case 1:
            let newUsername = readlineSync.question(`Enter new username:`)
            list.changeUserName(username, newUsername)
            mainMenuOrEmployeeMenu(username)
            break
        case 2:
            let newPassword = readlineSync.question(`Enter new password:`, {hideEchoBack: true})
            list.changePassword(username, newPassword)
            mainMenuOrEmployeeMenu(username)
            break
        default:
            main()
    }
}
function mainMenuOrAdminMenu(){
    if (readlineSync.keyInYN('Do you wanna return to main menu?\n' +
        'Press Y for main menu, press N to go back')) {
        main()
    } else {
        menuForAdmin()
    }
}
function mainMenuOrEmployeeMenu(username){
    if (readlineSync.keyInYN('Do you wanna return to main menu?\n' +
        'Press Y for main menu, press N to go back')) {
        main()
    } else {
        menuForEmployee(username)
    }
}
main()