class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDescription() {
        return `${this.make} ${this.model} ${this.year}`;
    }
}

const myCar = new Car("HONDA", "CR-v", 2021);

console.log(myCar.getDescription());