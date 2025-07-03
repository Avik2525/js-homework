function addMethod(obj, myMethod){
    obj[myMethod] = function(){
        return `method ${myMethod} kanchvele`
    };
}


const myObject = {};

addMethod(myObject, "Hello");
addMethod(myObject, "World");

console.log(myObject.Hello());
console.log(myObject.World());