let mod1 = {};
mod1.sessionId = Symbol.for("session");

let mod2 = {};
mod2.sessionId = Symbol.for("session");

console.log(Symbol.keyFor(mod1.sessionId));
console.log(Symbol.keyFor(mod2.sessionId));

let a = Symbol("session");
let b = Symbol("session");

let c = Symbol.for("session");
let d = Symbol.for("session");

console.log(a === b);
console.log(c === d);
console.log(a === c); 