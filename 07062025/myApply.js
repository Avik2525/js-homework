Function.prototype.myApply = function(constext, args){
    constext = constext || globalThis;

    const symb = Symbol("custom_fn");

    constext[symb] = this;

    let res;

    if(Array.isArray(args)){
        res = constext[symb](...args)
    } else if (args === null || args === undefined){
        res = constext[symb]();
    } else {
        console.log("Error");
    }

    delete constext[symb];

    return res;
}


function greet(age, country){
    console.log(`${this.name} is ${age} years old and lives in ${country}`);
}
const person = {name: "Mamikon"};

greet.myApply(person, [55, "Armenia"]);
