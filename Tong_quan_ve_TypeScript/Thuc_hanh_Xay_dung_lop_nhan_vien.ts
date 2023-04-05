class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string,
                email: string,
                age: number) {
        this.name = name;
        this.email = email;
        this.age = age
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(value: number) {
        this.age = value;
    }
}
let staff = new Staff('Staff 1', 'staff@gmail.com', 20);


let nameStaff = staff.getName();

console.log(nameStaff); // Staff 1

staff.setName('Staff 2');

let currentNameStaff = staff.getName();

console.log(currentNameStaff) // Staff 2

