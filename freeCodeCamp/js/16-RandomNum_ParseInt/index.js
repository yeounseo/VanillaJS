// Random Numbers & parseInt

let RandomNum = Math.random();

// 0~19
console.log(Math.floor(RandomNum * 20));

function RandNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(RandNum(1, 10));

console.log(parseInt("11", 2));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt