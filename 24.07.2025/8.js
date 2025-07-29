function range(start, end, step = 1) {
    if (step === 0) {
        console.log("Error");
    }

    return {
        *[Symbol.iterator]() {
            if (step > 0) {
                for (let i = 0; i < end; i += step) {
                    yield i;
                }
            } else {
                for (let i = start; i > end; i += step) {
                    yield i;
                }
            }
        }
    };
}

console.log([...range(2, 10, 2)]);
console.log([...range(10, 2, -2)]);
