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