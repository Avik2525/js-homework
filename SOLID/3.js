class Shape {
    area(){
        throw new Error("area() petq e irakanacvi jarang klasum ");
    }
}

class Rectangle extends Shape {
    constructor(width, height){
        super()
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area(){
        return this.side * this.side;
    }
}

function displayArea(shape) {
    console.log("Area is", shape.area());
}

const myRectangle = new Rectangle(5, 10);
const mySquare = new Square(7);

displayArea(myRectangle);
displayArea(mySquare);