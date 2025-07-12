Function.prototype.myCall = function(context, ...args){
    context = context || globalThis;

    const symp = Symbol("castom_fn");

    context[symp] = this;

    const res = context[symp](...args);

    delete context[symp];

    return res;
}

function greet(msg){
    console.log(msg, this.name);
}

const person = {name: "Mamikon"};

greet.myCall(person, "Hello");