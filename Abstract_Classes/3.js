class Animal {
    constructor(){
        if(this.constructor === Animal){
            throw new Error("Error");
        }
    }
    speak(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak(){
        super.speak();
        console.log("Dog barks");
    }
}

const d = new Dog();
d.speak();