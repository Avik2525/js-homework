let obj1 = {
    0: 'a',
    1: 'b',
    length: 2,
    [Symbol.isConcatSpreadable]: true
};

let res1 = [].concat(obj1);
console.log(res1);

let obj2 = {
    0: 'x',
    1: 'y',
    length: 2,
    [Symbol.isConcatSpreadable]: false
};

let res2 = [].concat(obj2);
console.log(res2);