const Student = true;
const Students = false;

const person = {
    name: "Jons",
    age: 20,
    ...(Student && {status: "student"})
};

console.log(person);