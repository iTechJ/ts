const str: string = "hello";

const num: number = 3;
let bool: boolean = false;
let anything: any = 3;
anything = "string";

function func(): void {
    console.log("I return void");
}

const typle: [string, number] = ["hello", 10];

enum Color {Red, Green, Blue};
let c = Color.Red;

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
    throw new Error(message);
}

let o: object = {
    foo: "value"
};

console.log(o);
