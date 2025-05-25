interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "New York",
    contract: false,
};

interface  Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "New York",
    fullTimeEmployee: false,
    numberOfReports: 17,
};

function printTeacher(firstName: string, lastName: string): void {
    console.log(`${firstName.charAt(0)}. ${lastName}`);
}

interface printTeacherFunction {
    (firstName: string, lastName: string): void;
}
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClass {
    constructor(public firstName: string, public lastName: string) {}
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return this.firstName;
    }
}