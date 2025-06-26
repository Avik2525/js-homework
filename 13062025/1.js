const person1 = {
    name: "Jons",
    age: 19,
    citya: "Yerevan"
};

const person2 = {
    age: 20,
    erkir: "Armenia"
};

const mergedPerson = Object.assign({}, person1, person2);
console.log(mergedPerson);