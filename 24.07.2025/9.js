function LazyFlatten(arr) {
    return {
        *[Symbol.iterator]() {
            for (let num of arr) {
                if (Array.isArray(num)) {
                    yield* LazyFlatten(num);
                } else {
                    yield num;
                }
            }
        }
    };
}

const arrye  = [1, [2, [3, 4], 5], 6];

for (let n of LazyFlatten(arrye)) {
    console.log(n);
}