// If-else statement
let age = 20;

if (age >= 18) {
  console.log("You are Eligible for voting .");
} else {
  console.log("You are a minor.");
}


// For loop
let fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop
let i = 0;

while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Function declaration with arguments
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!

// Accessing array contents by index
let numbers = [10, 20, 30];

console.log(numbers[0]); // Output: 10

// Basic object-related operations
let person = {
  name: "John",
  age: 25,
  occupation: "Engineer",
};

console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30
