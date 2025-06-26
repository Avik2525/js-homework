const Student = true;

const person = {
    name: "Jons",
    age: 20,
    ...(Student && {status: "student"})
};

console.log(person);