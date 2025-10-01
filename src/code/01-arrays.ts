console.log(`Example of arrays in TypeScript`);

const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ['Alice', 'Bob', 'Charlie'];

console.log(`Numbers:`, numbers);
console.log(`Names:`, names);

console.log(`Length: ${numbers.length}`);
console.log(`The value in index is: ${names[1]}`);

// Add item in names
names.push('Mary');
names.shift();
console.log('Names modified: ', names);

const fruits: string[] = ['Blueberries', 'Apple', 'Banana'];
const otherFruits: string[] = ['Orange', 'Lima'];
console.log(`Fruits: `, fruits);
console.log(`Other Fruits: `, otherFruits);

const concatFruits = fruits.concat(otherFruits);
console.log(`Concat Fruits: `, concatFruits);

const spreadFruits = [...fruits, ...otherFruits];
console.log(`Spread Fruits: `, spreadFruits);

concatFruits.unshift('Pineapple');
console.log(`Concat Fruits modified: `, concatFruits);

// Loops.
console.log(`While Loop:`);
let i = 0;
while (i < spreadFruits.length) {
    console.log(`Iteration ${i} : Value ${spreadFruits[i]}`);
    i += 1;
}

console.log(`Do While Loop:`);
i = 0;
do {
    console.log(`Iteration ${i} : Value ${spreadFruits[i]}`);
    i += 1;
} while (i < spreadFruits.length);


console.log(`For Loop:`);
for (let i = 0; i < spreadFruits.length; i++) {
    console.log(`Iteration ${i} : Value ${concatFruits[i]}`);
}

console.log(`For...of Loop:`);
for (const fruit of spreadFruits) {
    console.log(`Value: ${fruit}`);
}