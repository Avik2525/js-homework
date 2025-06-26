function shallowMerge(...objects) {
    return Object.assign({}, ...objects);
}

const obj1 = {name: "Jons", age: 10};
const obj2 = {age: 25, avg: 90};

const result = shallowMerge(obj1, obj2);
console.log(result);

