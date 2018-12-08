/* Strings! */

/*
    Code Output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

var myName = 'Unseo';

var sentence = "He said \"Hi!\""; // He said Hi!

var sentence = 'He said \"Hi!\"';

var fullName = 'Beau' + 'Carnes'; // 'Beau Carnes'

var sentence2 = 'My name is' + fullName; // 'My name is Beau Carnes'

fullName += ' is my name.'; // 'Beau Carnes is my name'

// Strings : [bracket notation]

var firstName = "beau"
// index 0 : b
// index 1 : e
// index 3 : u

console.log(firstName[0]);
console.log(firstName[firstName.length - 2]);
// firstName[0] = "Q";

firstName = "Quincy";
console.log(firstName);