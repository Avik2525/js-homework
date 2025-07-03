const person1 = {
    name: "Avo",
    age: 19,
    citya: "Yerevan"
};

const person2 = {
    age: 20,
    Country: "Armenia"
};

const margedPerson = Object.assign({}, person1, person2);
console.log(margedPerson);