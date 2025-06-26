function countProperties(obj){
    let count = 0;
    for (let key in obj) {
        ++count;
    }
    return count;
}

const person = {name: "Jons"};
const child = Object.create(person);
child.age = 20;
child.citiy = "Yerevan";

console.log(countProperties(child));