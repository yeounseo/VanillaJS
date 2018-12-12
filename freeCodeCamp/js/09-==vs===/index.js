// JS Nuggets : == vs ===

// == abstract equality

// === strict equality

console.log(3 == "3"); // true

console.log(3 === "3"); // false  why?  data type!

console.log(true == '1'); // true
console.log(true === '1'); // false

console.log("This is a string." == new String("This is a string."));
console.log("This is a string." === new String("This is a string."));