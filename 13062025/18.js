const person = {
    name: "Maminkon",
    city: "Yerevan"
};

function foo(person){
    const values = Object.values(person);

    const transformad = values.map(function(values){
        return String(values).toUpperCase();
    });

    return transformad;
}

console.log(foo(person));