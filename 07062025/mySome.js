Array.prototype.mySome = function(callback, thisArg){
    for (let i = 0; i < this.length; ++i){
        if(thisArg.hasOwnProperty(i)){
            if(callback.call(thisArg, this[i], i, this)){
                return true;
            }
        }
    }
    return false;
}
