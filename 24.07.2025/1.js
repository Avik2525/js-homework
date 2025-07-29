let symb1 = Symbol("Hello");
let symb2 = Symbol("Hello");

let obj = {};
obj[symb1] = 11;
obj[symb2] = 12;

let SYM = Object.getOwnPropertySymbols(obj);
let oob = Object.keys(obj);

console.log(SYM);
console.log(obj[symb1]);
console.log(obj[symb2]);
console.log(symb1 === symb2);