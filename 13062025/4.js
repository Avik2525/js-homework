const keys = ["name", "age", "citiy"];
const values = ["Jons", 20, "Yerevan"];

const dynamicObject = {};

for( let i = 0; i < keys.length; ++i){
    dynamicObject[keys[i]] = values[i];
}

console.log(dynamicObject);