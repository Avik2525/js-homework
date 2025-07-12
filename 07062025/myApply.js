Function.prototype.myApply = function(context, args){
    context = context || globalThis;

    const symb = Symbol("castom_fn");

    context[symb] = this;

    if(Array.isArray(args)){
        res = context[symb](...args);
    } else {
        res = context[symb]();
    }
    delete context[symb];

    return res;
}

function greet(age, country){
    console.log(`${this.name} is ${age} years old and lives in ${country}`);
}
const person = {name: "Mamikon"};

greet.myApply(person, [55, "Armenia"]);