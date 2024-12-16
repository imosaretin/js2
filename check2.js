// # 4. Minimum and Maximum Values

const numbers = [23, 13, 35, 42, 8, 9, 33];
const minValue = Math.min(...numbers);
const maxValue = Math.max(...numbers);

//console.log(`The minimum value is ${minValue} and the maximum value is ${maxValue}`);

// # 5. Sum of Array

let a = [23, 13, 35, 42, 8, 9, 33];
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
//console.log(sum)

// # 6. Filter an array

array = [23, 13, 35, 42, 8, 9, 33];

// Filter the even numbers
array1 = array.filter( number => number % 2 === 0);

//console.log("Filtered Array:", array1);

