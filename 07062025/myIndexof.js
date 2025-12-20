Array.prototype.myIndexOf = function (Element, Index = 0) {

    let start = Index < 0 ? this.length + Index : Index;

    if (start < 0) start = 0;

    for (let i = start; i < this.length; ++i) {
        if (this[i] === Element) {
            return i;
        }
    }
    return -1
}
