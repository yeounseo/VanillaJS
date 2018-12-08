// JS Nuggets: Date Types

// There are 7 data types

// Boolean

var data = false;

if (data) {
    console.log("Booleans rule!");
} else {
    console.log("Booleans are lame.");

}

// null

var n = null;
console.log(n * 32);


// undefined

var a;
console.log(a + 2);
// Nan is means not an Number

// Number

var num = 3.6;
var ber = 6.4;
console.log(num + ber);


// String. "Howdy"

var str = "Howdy";
var name = "YeoUnseo";
console.log(str + " Hi My name is" + name);


// Symbol

var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2); // false
console.log(String(sym1) === String(sym2)); //true


// Object

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";

console.log(myCar.make);
console.log(myCar.model);