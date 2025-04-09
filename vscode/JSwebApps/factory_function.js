function Employee(name,age,salary){
    let employee={ name:name, age:age , salary: salary,
        displayName:function(){ return this.name; },
        increaseAge:function(){ return this.age+1; },
        decreaseAge:function(){ return this.age-1; }
    };
    return employee;
}

function Manager(name,age,salary,department){
    let manager= Employee(name,age,salary);
    manager.department= department;

    manager.displayDepartment=function(){
        return this.department;
    }
    manager.increaseSalary=function(employee,amount){
        employee.salary+=amount;
        return employee.salary;
    };
    manager.decreaseSalary=function(employee,amount){
        employee.salary-=amount;
        return employee.salary;
    };
    return manager;
}

let emp1=Employee("Johnny", 35, 30000);
console.log(emp1.displayName());
console.log(emp1.increaseAge());
console.log(emp1.decreaseAge());

let manager1=Manager("Nitin", 40, 50000,'Arts');
console.log(manager1.displayName);
console.log(manager1.displayDepartment);
console.log(manager1.increaseSalary(emp1,5000));
console.log(manager1.decreaseSalary(emp1,5000));