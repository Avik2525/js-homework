const person = {
    name: "Mamikon",
    age: 33,
    city: "Yerevan"
};

const Str = JSON.stringify(person);
console.log(Str);

const Obj = JSON.parse(Str);
console.log(Obj);