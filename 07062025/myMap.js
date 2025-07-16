Array.prototype.myMap = function(callback, thisArg){
    const result = [];

    for (let i = 0; i < this.length; ++i){
        if (this.hasOwnProperty(i)){
            result.push(callback.call(thisArg,this[i], i, this));
        }
    }
    return result;
}

