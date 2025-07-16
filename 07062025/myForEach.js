Array.prototype.myForEach = function(callback, thisArg){
    for (let i = 0; i < this.length; ++i){
        if(this.hasOwnProperty(i)) {
            callback.call(thisArg,this[i], i, this);
        }
    }
};

const num = [1,2,3];

const res = num.forEach((num, indexs) => {
    console.log(`${num} index ${indexs}`);
});

