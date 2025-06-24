class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `Employee: ${this.name}, Department: ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // inherit name & department
    this.teamSize = teamSize;
  }

  describe() {
    return `Manager: ${this.name}, Department: ${this.department}, Team Size: ${this.teamSize}`;
  }
}

class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

const emp1 = new Employee("Alexander", "Engineering");
const emp2 = new Employee("Brandon", "Marketing");
const emp3 = new Employee("Catherine", "Sales");
const mgr1 = new Manager("Rain", "Engineering", 5);
const mgr2 = new Manager("Daniella", "Sales", 3);
