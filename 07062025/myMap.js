Array.prototype.myMap = function(callback, thisArg) {
    let newArray = [];

    for (let i = 0; i < this.length; ++i) {
        let result = callback.call(thisArg, this[i], i, this);

        newArray.push(result);
    }

    return newArray;
}
