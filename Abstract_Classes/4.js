class Employee {
    constructor(){
        if(this.constructor === Employee){
            throw new Error("Error");
        }
    }
    getSalary(){
        throw new Error("Error");
    }
}

class FullTimeEmployee extends Employee {
    getSalary(){
        return 1000;
    }
}

class PartTimeEmployee extends Employee {
    getSalary(){
        return 3000;
    }
}

class Freelancer extends Employee {
    getSalary(){
        return 2000;
    }
}


const employee = [
    new FullTimeEmployee(),
    new Freelancer(),
    new PartTimeEmployee()
];

for (const emp of employee) {
    console.log(emp.getSalary());
}