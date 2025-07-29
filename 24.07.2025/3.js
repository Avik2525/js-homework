class AdminOnly {
   static [Symbol.hasInstance](instance) {
       return instance && instance.role === 'admin';
   }
}

let obj1 = {name: "Jimi", role: "admin"};
let obj2 = {name: "Vlo", role: "aaa"};

console.log(obj1 instanceof AdminOnly);
console.log(obj2 instanceof AdminOnly);