// JS Nuggets : 10 Common Array Methods

var arr = ['a', 'b', 'c'];

arr.push("d");
console.log(arr);

arr.pop();
console.log(arr);

var arr2 = ["g", "q"];
console.log(arr.concat(arr2));
console.log(arr2);

console.log(arr.join("!"));

console.log(arr.reverse()); // change reverse array

console.log(arr);

console.log(arr.shift()); // first array out
console.log(arr);

console.log(arr.unshift("p")); // first array push
console.log(arr);

console.log(arr.slice(1, 2));
console.log(arr);

arr.push("i");
arr.push("f");
arr.sort();
console.log(arr);

console.log(arr.splice(2, 2, "JS Nuggets"));
console.log(arr);

/* Copying Arrays */

var original = [true, true, undefined, false, null];

// slice
var copy1 = original.slice(0);

// spread operator
var copy2 = [...original];
console.log(copy1, copy2);

// DEEP copying
var deepArray = [
    ["freeCodeCamp"]
];
var shallowCopy = deepArray.slice(0);

// shallowCopy[0].push(" is great");
// console.log(deepArray[0], shallowCopy[0]);

var deepCopy = JSON.parse(JSON.stringify(deepArray));

deepCopy[0].push(" is great");
console.log(deepArray[0], deepCopy[0]);