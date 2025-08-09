class Shape {
    constructor(){
        if(this.constructor === Shape){
            throw new Error("Ches karox Shape is object stexcel");
        }
    }
    getArea(){
        throw new Error("qo stexcac class um chka getArea function");
    }
}

class Rectangle extends Shape {
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width + this.height;
    }
}

class Circle extends Shape {
    constructor(squire){
        super();
        this.squire = squire;
    }

    getArea() {
        return this.squire * this.squire;
    }
}

const rect = new Rectangle(10, 5);
console.log("result", rect.getArea());

const circ = new Circle(5);
console.log("result", circ.getArea());