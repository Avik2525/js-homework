const obj = {
    number: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    skip: false,

*[Symbol.iterator]() {
    for (let num of this.number) {
        if (this.skip && num % 2 === 0) {
            continue;
        }
        console.log("Yie:" ,num);
        yield num;
        }
    }
};

console.log("Normal Iteration");
for (let n of obj) {
    console.log(n);
}

console.log("Skip Numbers");
obj.skip = true;
for (let n of obj){
    console.log(n);
}