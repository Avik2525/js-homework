const user  = {
    name: "Mamikon",
    age: 40,
};

const {name, age, email = 0} = user;

console.log(name);
console.log(age);
console.log(email);

console.log(user);