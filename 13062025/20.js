const person = {
    name: "Mamikon",
    age: 44,
    number: 12345678,
    city: "Yerevan",
};

function foo(person){

    const val_key = Object.entries(person);

    const digit = val_key.filter(([Key, val]) => typeof val === "number");

    const result = Object.fromEntries(digit);

    return result;
}

console.log(foo(person));