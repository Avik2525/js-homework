Array.prototype.myEvery = function(callback){
    for (let i = 0; i < this.length; ++i){
        if(this.hasOwnProperty(i)){
            if (!callback(this[i], i, this)){
                return false;
            }
        }
    }
    return true;
}