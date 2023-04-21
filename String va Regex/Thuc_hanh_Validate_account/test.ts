import {AccountRegex} from "./AccountRegex";

let accountRegex = new AccountRegex();

let validAccount: string[] = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount: string[] = [".@", "12345", "1234_", "abcde"];

for (let account of validAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}
for (let account of invalidAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}