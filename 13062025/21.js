const arr = [
    {a: 1, b: 2},
    {b: 5, c: 6},
    {d: 10, c: 3}
];

function foo(num){

    const result = {};

    for (let obj of num){
        for (let [key, val] of Object.entries(obj)) {
            result[key] = val;
        }
    }
    return result;
}

console.log(foo(arr));