Function.prototype.myCall = function(context, ...args){
    context = context || globalThis;

    const symb = Symbol("castom_fn");

    context[symb] = this;

    const res = context[symb](...args);

    delete context[symb];

    return res;
}