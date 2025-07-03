const Person = {
    greet(){
        return `my name is ${this.name}`;
    }
};

const Student = Object.create(Person);

Student.name = "Jons";
Student.major = "Programing";


Student.greet = function(){
    return `Hello my name is ${this.name} and I study ${this.major}`;
};

console.log(Student.greet());