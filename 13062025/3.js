const student = {
    name: "Jons",
    age: 20 
};

Object.freeze(student);

student.name = "Avo";
student.age = 30;

console.log(student);