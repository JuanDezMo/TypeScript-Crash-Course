console.log(`Example of variables in TypeScript`);

const username: string = '@juandezmo';
const age: number = 32;
const isAlive: boolean = true;
let undefinedValue: undefined;
const symbolValue: symbol = Symbol('MySymbol');

console.log(`Username: ${username} - Type: ${typeof username}`);
console.log(`Age: ${age} - Type: ${typeof age}`);
console.log(`Is Alive: ${isAlive} - Type: ${typeof isAlive}`);
console.log(`Undefined Value: ${undefinedValue} - Type: ${typeof undefinedValue}`);
console.log(`Symbol Value: ${symbolValue.toString()} - Type: ${typeof symbolValue}`);