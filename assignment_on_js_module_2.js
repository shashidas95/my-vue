// Exercise 1: 
// Write a function named destructureExample that takes in an object and an array as parameters.The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array.The function should then return an object with the extracted values as properties with name and age.




const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];
function destructureExample(obj, arr) {

 const { name, age, city } = obj;

 const [a, b, c, d] = arr;
 return { name, age, a, b }

}
const result = destructureExample(obj, arr)
console.log(result);

// // Output:
// { name: 'John', age: 30 }

/*
Exercise 2:
Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.
 
Example:
Input:
sumNumbers(1, 2, 3, 4, 5);
 
Output:
15 */
function sumNumbers(...numbers) {
 return numbers.reduce((sum, currentValue) => sum + currentValue, 0)
}
const result2 = sumNumbers(1, 2, 3, 4, 5)
console.log(result2);

/*
Exercise 3:
 Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: "Hello, [name]! Welcome to our website."
 

Input:
createGreeting('Alice');
 
Output:
"Hello, Alice! Welcome to our website." */
function createGreeting(name) {
 return `"Hello, ${name}! Welcome to our website."`
}
const result3 = createGreeting("Alice")
console.log(result3);
/**
 *  
Exercise 4: 
Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.
 
Input:
isEven(7);
 
 */
function isEven(number) {
 return number % 2 == 0 ? "even" : "odd";
}
const result4 = isEven(7);
console.log(result4)

/**Exercise 5: 
Convert the following function to an arrow function:
 
function multiply(a, b) {
  return a * b;
}
*/

const multiply = (a, b) => a * b;
console.log(multiply(5, 6))
/** 
Exercise 6: 
Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).
 */
function getLargestNumber(num1, num2) {
 return num1 >= num2 ? num1 : num2;
}
const result6 = getLargestNumber(10, 5)
console.log(result6)

/**Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.
 
Example:
Input:
const address = { street: '123 Main St', country: 'USA' };
 
Output:
"Unknown"
  */

function getAddressCity(address) {
 return address?.city ?? "Unknown";
}

// Example usage:
const address = { street: '123 Main St', country: 'USA' };
const result7 = getAddressCity(address);
console.log(result7); // Output: "Unknown"


/** excercise 8 */
function doubleNumbers(numbers) {
 return numbers.map((number) => number * 2);
}

// Example usage:
const result8 = doubleNumbers([1, 2, 3, 4, 5]);
console.log(result8); // Output: [2, 4, 6, 8, 10]

/** excercise 9 */
function filterEvenNumbers(numbers) {
 return numbers.filter((number) => number % 2 === 0);
}

// Example usage:
const result9 = filterEvenNumbers([1, 2, 3, 4, 5]);
console.log(result9); // Output: [2, 4]
/** excercise 10 */

function sumArray(numbers) {
 return numbers.reduce((sum, number) => sum + number, 0);
}

// Example usage:
const result10 = sumArray([1, 2, 3, 4, 5]);
console.log(result10); // Output: 15

/** excercise 11 */
function sortNumbers(numbers) {
 return numbers.sort((a, b) => a - b);
}

// Example usage:
const result11 = sortNumbers([5, 2, 8, 1, 4]);
console.log(result11); // Output: [1, 2, 4, 5, 8]
