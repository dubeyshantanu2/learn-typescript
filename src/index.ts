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