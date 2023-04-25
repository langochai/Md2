export type Authority = "Admin" | "Employee"

export class Employee {
    authority: Authority;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.authority = "Employee"
    }

    setAuthority(authority: Authority) {
        this.authority = authority
    }

    setPassword(password: string) {
        this.password = password
    }

    setName(username: string) {
        this.username = username
    }

    getAuthority() {
        return this.authority
    }

    getPassword() {
        return this.password
    }

    getName() {
        return this.username
    }
}