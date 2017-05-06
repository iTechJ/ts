function defaults(greetings: string, name: string = "World") {
  console.log(`${greetings}, ${name}!`);
}
const greetings = "Hello";
const name1: string = "Students";

defaults(greetings);
defaults(greetings, name1);

/*****************************************/

function rest(x: number, ...y: any[]): void {
  console.log(x);
  console.log(y);
}
rest(3, "a", "b", "c", "d");

/*****************************************/

function spread(a: number, b: number, c: number) {
  console.log(`${a}, ${b}, ${c}`);
}

const spreadNumbers: number[] = [1, 2, 3];
(<any>spread)(...spreadNumbers);

