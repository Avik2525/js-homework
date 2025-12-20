Function.prototype.myApply = function(context, args){
    context = context || globalThis;

    const symb = Symbol("custom_fn");

    context[symb] = this;

    let res;

    if(Array.isArray(args)){
        res = context[symb](...args)
    } else if (args === null || args === undefined){
        res = context[symb]();
    } else {
        console.log("Error");
    }

    delete context[symb];

    return res;
}
