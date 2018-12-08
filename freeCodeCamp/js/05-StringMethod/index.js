// 20 String Methods

var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";

// charAt()
console.log(stringOne.charAt(1));

// charCodeAt()
console.log(stringOne.charCodeAt(1));

// concat()
console.log(stringOne.concat(stringTwo));

// endsWith()
console.log(stringOne.endsWith("to"));

// fromCharCode()
console.log(String.fromCharCode(114));

// includes()
console.log(stringTwo.includes("end"));

// indexOf()
console.log(stringTwo.indexOf("end"));

//lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));

// match()
console.log(stringTwo.match(/end/g));

// repeat()
console.log(stringOne.repeat(3));

// replace()
console.log(stringTwo.replace(/end/g, "END"));

// search()
console.log(stringTwo.search("end"));

// slice()
console.log(stringTwo.slice(2, 4));

// split()
console.log(stringTwo.split(" "));

// startsWith()
console.log(stringOne.startsWith("free"));

// substr()
console.log(stringOne.substr(2, 4));

//substring()
console.log(stringOne.substring(2, 4));

// toLowerCase()
console.log(stringOne.toLowerCase());

// toUpperCase()
console.log(stringTwo.toUpperCase());

// trim()
var stringThree = "      subscribe now!      ";
console.log(stringThree.trim());