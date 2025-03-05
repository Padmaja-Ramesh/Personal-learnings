import Student from "./Student.js";
import Person from "./Person.js";

// Variable declarations
let v = 10;
console.log(typeof(v));

let num1 = "string";
console.log(typeof(num1));

// let, var, const
let i = 10;
let j = "name";
j = 20; // let allows reassignment

var k = 20;
var k = "name"; // var allows redeclaration
k = 40;

const m = "string";
// m = 40; // Error: Cannot re-assign const
console.log("m", m);

// Function scope and block scope
let letValue = 20;
function add(a, b) {
    let letValue = a + b;
    return letValue;
}
let ans = add(5, 7);
console.log(ans);  // Output: 12

var varValue = 30;
function addVar(a, b) {
    var varValue = a + b;
    return varValue;
}
console.log(addVar(10, 30)); // Output: 40
console.log(varValue);  // Output: 30

// Loops and conditions
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let game = 0;
while (game < 10) {
    game++;
    console.log("game", game);
}

do {
    game++;
    console.log("game", game);
} while (game < 10);

// Conditions
let cla = false;
if (cla) console.log(cla);

if (!cla) {
    console.log("here", cla);
} else {
    console.log("not here");
}

// Array methods
let values = new Array(12, 15, 16, 18);
values.push(10);
values.pop();
values.unshift(40);
console.log(values.indexOf(16)); // 3
console.log(values.includes(30)); // false
console.log(values.slice(2)); // [16, 18]
console.log(values.slice(1, 3)); // [15, 16]

let evenValues = values.filter(value => value % 2 == 0);
console.log(evenValues);

let sumValues = values.reduce((sum, val) => sum + val, 0);
console.log(sumValues);

let newMap = values.map((val) => val * 3);
console.log(newMap);

// Chain methods
let num = values.map((val) => val * 3).filter((val) => val % 2 == 0).reduce((sum, val) => sum + val, 0);
console.log(num);

// Sort integers or strings
let alpha = ["apple", "ant", "alligator", "apricot"];
console.log(alpha.sort());
console.log(alpha.reverse());

let nums = [10, 2, 15, 13, 9];
console.log(nums.sort((a, b) => a - b));
console.log(nums.sort((a, b) => b - a));

// String methods
let word = "name-Is-String ";
let subWord = word.slice(0, 4);
console.log(subWord); // name
let subArr = word.split("-");
console.log(subArr); // [ 'name', 'Is', 'String ']
let subArrTrim = subArr[2].trim();
console.log(subArrTrim.length); // 6

// String to number conversion
let alpha1 = "10";
let alpha2 = "30";
let alphaSum = alpha1 + alpha2;  // "1030"
let sumAlpha = parseInt(alpha1) + parseInt(alpha2);
console.log(sumAlpha); // 40

// Object properties
let pointers = { 'name': 'first last', 'age': 10 };
console.log(pointers['name']);
pointers.name = 'first value';
pointers.gender = 'female';
console.log(pointers);
delete pointers.name;
console.log(pointers);

// Creating a Person object
let person1 = new Person("John", "Doe");
console.log(person1.name);  // Output: 'person'
person1.fullName();  // Output: John Doe

// Creating a Student object
let student1 = new Student("Sub", "Arr");
console.log(student1.name);  // Output: 'student'
student1.fullName();  // Output: Sub Arr
