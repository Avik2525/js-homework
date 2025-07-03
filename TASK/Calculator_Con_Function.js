function calculator(){
    this.num1 = 0;
    this.num2 = 0;

    this.set = function(n1, n2){
        this.num1 = n1;
        this.num2 = n2; 
    }

    this.add = function(){
        return this.num1 + this.num2;
    }
    this.sub = function(){
        return this.num1 - this.num2;
    } 
    this.mul = function(){
        return this.num1 * this.num2;
    }
    this.div = function(){
        if (this.num2 === 0){
            return `${this.num1} ches karox bajanel ${this.num2}-i vra hargelis`;
        }
        return this.num1 / this.num2;
    }

    this.modulo = function(){
        if (this.num2 === 0){
            return `${this.num1} ches karox bajanel ${this.num2}-i vra hargelis`;
        }
        return this.num1 % this.num2;
    }
}

const num = new calculator();

num.set(10, 2);

console.log("Gumarn:", num.add());
console.log("Hanum:", num.sub());
console.log("Artadryal:", num.mul());
console.log("Bajanum:", num.div());
console.log("Mnacortov:", num.modulo());