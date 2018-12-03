// if(condition){
//     block
// }else {
//     block
// }

// if ("10" === 10) {
//     console.log('hi');
// } else if ("10" === "10") {
//     console.log('lalala');
// } else {
//     console.log('ho');
// }

// && = and : 둘 중에 하나라도 false일 경우는 다음으로 넘어간다.
// || = or : 둘 중에 하나라도 true일 경우에 실행된다.
// if (20 > 5 && "nico" === "nico") {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// true && true = true;
// false && true = false;
// true && false = false;
// false && false = false;

// true || true = true;
// false || true = true;
// true || false = true;
// false || false = false;

const age = prompt(`How old are you`);

if (age >= 18 && age <= 21) {
    console.log(`you can drink but you should not`);
} else if (age > 21) {
    console.log(`go ahed`);
} else {
    console.log(`too young`);
}