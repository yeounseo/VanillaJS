/* Array Basics */

var sandwich = ["peanut butter", "jelly", "bread"];

var teams = [
    ["Bulls", 23],
    ["White Sox", 45]
];

sandwich[1] = "bananas";

console.log(sandwich[1]);
console.log(sandwich[0]);
console.log(teams[1][0]);
teams[1][0] = "red socks";
console.log(teams);

sandwich.forEach(function (element) {
    console.log(element);
});