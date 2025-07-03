function calculator() {
    return {
        num1: 0,
        num2: 0,

        set: function(n1, n2){
            this.num1 = n1;
            this.num2 = n2;
        },

        add: function(){
            return this.num1 + this.num2;
        },

        sub: function(){
            return this.num1 - this.num2;
        },

        mul: function(){
            return this.num1 * this.num2;
        },

        div: function(){
            if (this.num2 === 0){
                return `${this.num1} ches karox bajanel ${this.num2}-i vra hargelis`;
            }
            return this.num1 / this.num2;
        },

        modulo: function(){
            if (this.num2 === 0){
                return `${this.num1} ches karox bajanel ${this.num2}-i vra hargelis`;
            }
            return this.num1 % this.num2;
        }
    }
}

const num = calculator();

num.set(10, 2);

console.log("Gumarn:", num.add());
console.log("Hanum:", num.sub());
console.log("Artadryal:", num.mul());
console.log("Bajanum:", num.div());
console.log("Mnacortov:", num.modulo());