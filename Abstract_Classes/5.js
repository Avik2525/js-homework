class Device {
    constructor(){
        if(this.constructor === Device){
            throw new Error ("Error");
        }
    }
    info(){
        console.log("Device");
    }
}

class Computer extends Device {
    info(){
        super.info();
        console.log("Computer");
    }
}

class Laptop extends Computer {
    info(){
        super.info();
        console.log("LapTop")
    }
}

const myLaptop = new Laptop();
myLaptop.info();