Array.prototype.myEvery = function(callback,thisArg){
    for (let i = 0; i < this.length; ++i){
        if(this.hasOwnProperty(i)){
            if (!callback.call(thisArg,this[i], i, this)){
                return false;
            }
        }
    }
    return true;
}
