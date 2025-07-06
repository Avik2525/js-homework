const user = {
    name: "Mamikon",
    age: 40,
    email: "helo11@gmail.com",
    city: "Yerevan",
    profession: "programmer"
};

function foo(user){
    const {name, age, ...pers} = user;
    return {
        name, age, pers,
    };
}

const result = foo(user);

console.log(result.name);
console.log(result.age);
console.log(result.pers);