// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".
// Examples
// generation(2, "f") ➞ "granddaughter"
// generation(-3, "m") ➞ "great grandfather"
// generation(1, "f") ➞ "daughter"


function generation(x, y) {
    const gens = {
        "-3": ["great grandfather",	"great grandmother"],
		"-2": ["grandfather",	"grandmother"],
		"-1": ["father", "mother"],
		 0: ["me!", "me!"],
		 1: ["son", "daughter"],
		 2: ["grandson",	"granddaughter"],
		 3: ["great grandson",	"great granddaughter"]
	}
	return gens[x][y === "m" ? 0 : 1]
}
console.log(generation(-3, 'm'));


// Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.

// Examples
// add_ly = add_suffix("ly")
// add_ly("hopeless") ➞ "hopelessly"
// add_ly("total") ➞ "totally"
// add_less = add_suffix("less")
// add_less("fear") ➞ "fearless"
// add_less("ruth") ➞ "ruthless"

function add_suffix(suffix) {
	return function(y){
		return y + suffix;
	}
}
console.log(add_suffix("ly"));




// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// e.x.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

function convert(obj) {
  return Object.entries(obj);
}
const objecto = { a: 1, b: 2 };

console.log(convert(objecto));

// Write a function that takes the base and height of a triangle and return its area.

function areaTr(a, h) {
  return (a * h) / 2;
}
console.log(areaTr(3, 8));

// // Create a function that will return an integer number corresponding to the amount of digits in the given integer

// //ex
// num_of_digits(1000) ➞ 4
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10
// num_of_digits(0) ➞ 1

function num_of_digits(num) {
  return `${num}`.match(/\d/g).length;
}

console.log(num_of_digits(1213111425));

function num_of_digits2(num) {
  let n = Math.abs(num),
    i = 1;

  while ((n /= 10) && n >= 1) {
    i++;
  }
  return i;
}
console.log(num_of_digits2(1122));
