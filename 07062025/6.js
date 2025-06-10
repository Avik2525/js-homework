Array.prototype.myIndexOf = function(Element, Index = 0){
    
    let start = Index < 0 ? 0 : Index;

    for (let i = 0; i < this.length; ++i){
        if (this.hasOwnProperty(i)){
            if(this[i] === Element){
                return i;
            }
        }
    }
    return -1
}