const obj = {
    stry: ['apple', 'banan', 'cherry'],

    [Symbol.iterator]() {
        let counte = this.stry.length - 1;
        const index = this.stry;

        return {
            next() {
                if(counte >= 0) {
                    const value = index[counte];
                    counte--;
                    return {value, done: false};
                }
                return {done: true};
            }
        };
    }
};

for (let word of obj) {
    console.log(word);
}

console.log("spread:", [...obj]);
