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

function menuForAdmin() {
    let option: string[] = ["Show list of accounts as admin", "Access list based on an username", "Add an user"]
    let index = readlineSync.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            list.showListForAdmin()
            mainMenuOrAdminMenu()
            break
        case 1:
            let usernameForChecking = readlineSync.question(`Please enter an username:`)
            let checkUser = list.get(usernameForChecking)
            if (checkUser) AccessListAsAdmin(usernameForChecking)
            else {
                console.log(`Cannot find this user`)
                mainMenuOrAdminMenu()
            }
            break
        case 2:
            let newUsername = readlineSync.question(`Enter username for new account:`)
            let passwordForNewAcc = readlineSync.question(`Enter password for new account:`, {hideEchoBack: true})
            let newEmployee = list.validAcc(newUsername, passwordForNewAcc)
            if (!newEmployee) {
                console.log(`Invalid input!`)
            } else if (list.get(newUsername)) {
                console.log(`Account existed!`)
            } else {
                list.add(newEmployee)
                console.log(`Add!`)
            }
            mainMenuOrAdminMenu()
            break
        default:
            main()
    }
}

function AccessListAsAdmin(usernameForChecking) {
    let checkUser = list.get(usernameForChecking)
    let option: string[] = ["Show info", "Edit username", "Edit password", "Edit authority", "Delete user"]
    let index = readlineSync.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            console.table(checkUser)
            AdminMenuOrStay(usernameForChecking)
            break
        case 1:
            let newName = readlineSync.question(`Enter new name:`)
            if (list.validName(newName)) {
                checkUser.setName(newName)
                menuForAdmin()
            } else {
                console.log(`Invalid name input.`)
                AdminMenuOrStay(usernameForChecking)
            }
            break
        case 2:
            let newPassword = readlineSync.question(`Enter new name:`)
            if (list.validPassword(newPassword)) {
                checkUser.setPassword(newPassword)
            } else console.log(`Invalid password input.`)
            AdminMenuOrStay(usernameForChecking)
            break
        case 3:
            if (readlineSync.keyInYN('Press Y to set authority as admin \n' +
                'Press N to set authority as employee')) {
                checkUser.setAuthority("Admin")
            } else {
                checkUser.setAuthority("Employee")
            }
            AdminMenuOrStay(usernameForChecking)
            break
        case 4:
            if (readlineSync.keyInYN('Do you really wanna delete this user?')) {
                list.remove(usernameForChecking)
                AdminMenuOrStay(usernameForChecking)
            } else {
                AccessListAsAdmin(usernameForChecking)
            }
            break
        default:
            AdminMenuOrStay(usernameForChecking)
    }
}

function AdminMenuOrStay(usernameForChecking) {
    if (readlineSync.keyInYN('Do you wanna return to admin menu?\n' +
        'Press Y for admin menu, press N to go back')) {
        menuForAdmin()
    } else {
        AccessListAsAdmin(usernameForChecking)
    }
}

/*
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
                    console.log(`Wrong password input`)
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
            console.table(list.get(usernameForChecking))
            mainMenuOrAdminMenu()
            break
        case 5:
            let nameForDelete = readlineSync.question(`Enter username:`)
            list.remove(nameForDelete)
            mainMenuOrAdminMenu()
            break
 */

function menuForEmployee(username) {
    let option: string[] = ["Show list of accounts as employee", "Change username", "Change password"]
    let index = readlineSync.keyInSelect(option, 'Please choose:')
    switch (index) {
        case 0:
            list.showListForEmployee()
            mainMenuOrEmployeeMenu(username)
            break
        case 1:
            let newUsername = readlineSync.question(`Enter new username:`)
            let nameRegex: RegExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
            if (nameRegex.test(newUsername)) list.changeUserName(username, newUsername)
            else console.log(`Invalid new username!`)
            mainMenuOrEmployeeMenu(username)
            break
        case 2:
            let newPassword = readlineSync.question(`Enter new password:`, {hideEchoBack: true})
            let passwordRegex: RegExp = /^[A-Za-z]{2}[0-9]{2}$/
            if (passwordRegex.test(newPassword)) list.changePassword(username, newPassword)
            else console.log(`Invalid new password!`)
            mainMenuOrEmployeeMenu(username)
            break
        default:
            mainMenuOrEmployeeMenu(username)
    }
}

function mainMenuOrAdminMenu() {
    if (readlineSync.keyInYN('Do you wanna return to main menu?\n' +
        'Press Y for main menu, press N to go back')) {
        main()
    } else {
        menuForAdmin()
    }
}

function mainMenuOrEmployeeMenu(username) {
    if (readlineSync.keyInYN('Do you wanna return to main menu?\n' +
        'Press Y for main menu, press N to go back')) {
        main()
    } else {
        menuForEmployee(username)
    }
}

main()