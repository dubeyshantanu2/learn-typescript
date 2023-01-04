let age: number = 25;

// To configure ts.config file type "tsc --init" in terminal
// After configuring the ts.config file, we can run "tsc" in terminal to compile the ts file to js file

//Data types in typescript
// any, unknown, never, enum, tuple

let sales = 123456789;
let courseName: string = "Typescript";
let isPublished: boolean = true;

function render(document: string) {
    console.log(document);
}
function renderAgain({text, number} : { text: string, number: number}) {
    console.log(text);
    console.log(number);
}

//Array in typescript 
let courses: string[] = ["Typescript", "Javascript", "React"];
// let courses: string[] = [3, "Javascript", "React"];
let courses2: Array<string> = ["Typescript", "Javascript", "React"];
courses.forEach(n=> n.concat("Nodejs"))
console.log("courses", courses)

//Tuples in typescript
let tuple: [string, number] = ["Typescript", 123];
tuple.push("Javascript");
tuple.push(456);
console.log("tuple", tuple);

//Enum in typescript
enum Role { ADMIN = "ADMIN", READ_ONLY = 100, AUTHOR = "AUTHOR" };
let role: Role = Role.ADMIN;
console.log("role", role);

//Functions in typescript
function add(a: number, b: number): number {
    return a + b;
}
console.log("add", add(1, 2));


//By adding taxYear = 2033 we are adding default value to the parameter
//If we dont specify any value for taxYear, it will take the default value
function calculateTax( income: number, taxYear= 2022): number {
    if(taxYear > 2022) 
        return income * 0.3;
    else
        return income * 0.2;
}
console.log("calculateTax", calculateTax(100000));


//Object in typescript

//Type Allias

type Person = {
    id: number,
    name: string,
    age: number,
    retire: (date: Date) => void
}
// With above method we can use Person type in other places
let person: Person = {
    id: 121,
    name: "John",
    age: 25,
    retire: (date: Date) => {
        console.log("Retired on", date);
    }
}
