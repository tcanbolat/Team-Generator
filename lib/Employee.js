class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  };

  getEmail() {  
    return this.email;
  };

  getRole() {
    return "Employee" // Returns 'Employee'
  }; 


  // printInfo() {
  //   console.log(`This employee's name is ${this.name}`);
  // console.log(`This employee's ID-# is ${this.id}`);
  // console.log(`This employee's Title is ${this.title}`);

    
    


  // }

}

module.exports = Employee;