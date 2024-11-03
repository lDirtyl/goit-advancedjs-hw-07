/*
  Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

  Клас Employee повинен включати:

  властивість name, яка буде доступна всім.
  властивість department, яка буде доступна лише всередині класу Employee.
  salary, яке буде доступне лише всередині класу Employee та його підкласів.


  Клас Manager повинен бути підклас класу Employee

  Необхідно реалізувати в класі Manager конструктор, який викликатиме конструктор суперкласу та збільшуватиме salary на 10000.

*/

class Employee {
  public constructor(
    public name: string,
    public department: string,
    public salary: number
  ) { }
  
    getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}



class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);
  
    this.salary += 10000;
  }

  getManagerDetails(): string {
    return `Manager Details - ${this.getEmployeeDetails()}`;
  }
}


export {};