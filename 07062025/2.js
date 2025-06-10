Array.prototype.myMap = function(callback){
    const result = [];

    for (let i = 0; i < this.length; ++i){
        if (this.hasOwnProperty(i)){
            result.push(callback(this[i], i, this));
        }
    }
    return result;
}