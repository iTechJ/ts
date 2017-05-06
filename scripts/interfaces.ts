interface Person {
    firstName: string;
    lastName: string;
    greet(message: string): string
}

class Student implements Person {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet(message: string): string {
        return `${message}, ${this.firstName} ${this.lastName}`;
    }
}

function greeter(person: Person): void {
    console.log(person.greet("Aloha"));
}

const john = new Student("John", "Doe");
greeter(john);