Array.prototype.myForEach = function(callback, thisArg){
    for (let i = 0; i < this.length; ++i){
        if(this.hasOwnProperty(i)) {
            callback.call(thisArg,this[i], i, this);
        }
    }
};

