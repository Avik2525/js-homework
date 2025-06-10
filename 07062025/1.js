Array.prototype.myForEach = function(callback){
    for (let i = 0; i < this.length; ++i){
        if(this.hasOwnProperty(i)) {
            callback(this[i], i, this);
        }
    }
};
