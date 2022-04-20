// Import stylesheets
import './style.css';

//5 ways to check if a Javascript Array is empty
// ****************************************************

//Is JS array empty? Does it exist?

//1. The length property
// ---------------------------------------

// let isEmpty = arr.length ? true : false;
// console.log(isEmpty);
//Error: myArray is not defined

let myArray1 = [];
let isEmpty1 = myArray1.length ? 'it is not empty' : 'It is emtpy';
console.log(isEmpty1); //It is emtpy

let myArray2 = ['ant', 'bird'];
let isEmpty2 = myArray2.length ? 'it is not empty' : 'It is emtpy';
console.log(isEmpty2); //it is not empty

let myArray3 = [undefined];
let isEmpty3 = myArray3.length ? 'it is not empty' : 'It is emtpy';
console.log(isEmpty3); //it is not empty

//2. And (&&) Opertaor and length
// ----------------------------------------

// to check if an array exists and at the same time has the length property

let newArray;
let result = newArray && newArray.length ? true : false;
console.log(result); //false;

let newArray1 = [];
let result1 = newArray1 && newArray1.length ? true : false;
console.log(result1); //false;

let newArray2 = ['HTML', 'CSS'];
let result2 = newArray2 && newArray2.length ? true : false;
console.log(result2); //true

//3. Optional Chaining(.?)
// ----------------------------------------

//to check if an array exists and at the same time has the length property

// let answer = arr?.length? true : false;
// console.log(answer);
//Error: arr is not defined

let arr1 = [];
let answer1 = arr1?.length ? true : false;
console.log(answer1); //false

let arr2 = ['Messi', 'Ronaldo'];
let answer2 = arr2?.length ? true : false;
console.log(answer2); //true

//4. Logical NOT (!)
// ----------------------------------------

// Logical not operator negates the values.
// The following would return true in case an array is empty, that is [], or undefined or null.

// let ans = !array?.length ? true : false;
// Error: array is not defined

let array1;
let ans1 = !array1?.length ? true : false;
console.log(ans1); //true --> it is empty

let array2 = [];
let ans2 = !array2?.length ? true : false;
console.log(ans2); //true --> it is empty

let array3 = ['Nepal', 'USA'];
let ans3 = !array3?.length ? true : false;
console.log(ans3); //false --> it is not empty

//5. isArray() method
//-------------------------------------

//How do we really know if we work with the array though? The length property exists also on the string.

let mixed = [1, 245, 'apple', { type: 'fruit' }];
console.log('isArray: ', Array.isArray(mixed)); //isArray: true

// Let's combine the approaches listed above
// ------------------------------------------------

let output = Array.isArray(mixed) && mixed.length ? true : false;
console.log(output); //true
