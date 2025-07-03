class Calculator {
    #num1;
    #num2;

    set(n1, n2){
        this.#num1 = n1;
        this.#num2 = n2;
    }

    add(){
        return this.#num1 + this.#num2;
    }

    sub(){
        return this.#num1 - this.#num2;
    }

    mul(){
        return this.#num1 * this.#num2;
    }

    div(){
        if (this.#num2 === 0){
            return `${this.#num1} ches karox bajanel ${this.#num2}-i vra hargelis`;
        }
        return this.#num1 / this.#num2;
    }

    modulo(){
        if (this.#num2 === 0){
            return `${this.#num1} ches karox bajanel ${this.#num2}-i vra hargelis`;
        }
        return this.#num1 % this.#num2;
    }
}

const num = new Calculator();

num.set(10, 2);

console.log("Gumarn:", num.add());
console.log("Hanum:", num.sub());
console.log("Artadryal:", num.mul());
console.log("Bajanum:", num.div());
console.log("Mnacortov:", num.modulo());