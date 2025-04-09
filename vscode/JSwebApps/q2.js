// Employee constructor
function Employee(name, age, gender, salary) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.salary = salary;
}

Employee.fetchData = async function(id) {
  try {
    const res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

Employee.prototype.displayName = function() { return this.name; };
Employee.prototype.increaseAge = function() { return this.age + 1; };
Employee.prototype.decreaseAge = function() { return this.age - 1; };

// Manager constructor, inheriting Employee
function Manager(name, age, gender, salary, department) {
  Employee.call(this, name, age, gender, salary);
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Manager prototype methods
Manager.prototype.displayDepartment = function() { return this.department; };
Manager.prototype.increaseSalary = function(emp) { return emp.salary += 1000; };
Manager.prototype.decreaseSalary = function(emp) { return emp.salary -= 1000; };

// Test code to fetch and display data for multiple employees
(async function() {
  const employeeData1 = await Employee.fetchData(1); // Fetch data for employee with ID 1
  const employeeData2 = await Employee.fetchData(2); // Fetch data for employee with ID 2
  const employeeData3 = await Employee.fetchData(3); // Fetch data for employee with ID 3

  // Display fetched employee data
  console.log("Employee 1:", employeeData1); // Full data for Employee 1
  console.log("Employee 2:", employeeData2); // Full data for Employee 2
  console.log("Employee 3:", employeeData3); // Full data for Employee 3

  // Creating an Employee instance using fetched data
  const employee1 = new Employee(employeeData1.name, employeeData1.age, employeeData1.gender, employeeData1.salary);

  // Example Manager
  const manager = new Manager("John Doe", 45, "Male", 80000, "Engineering");
  console.log(manager.displayDepartment());  
  console.log(manager.increaseSalary(employee1)); 
})();
