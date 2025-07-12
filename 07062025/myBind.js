Function.prototype.myCall = function(context, ...args){
    context = context || globalThis;

    const symb = Symbol("castom_fn");
    context[symb] = this;

    const res = context[symb](...args);

    delete context[symb];

    return res;
}

Function.prototype.myBind = function(context, ...args){
    context = context || globalThis;
    const fn = this;

    return function(...moreArgs){
        return  fn.myCall(context, ...args, ...moreArgs);
    }
}

function multply(x, y){
    return this.factor * x * y;
}

const obj = {factor: 2};

const bn = multply.myBind(obj, 5);

console.log(bn(10));