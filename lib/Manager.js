const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getEmail() {
   return this.email
  }

  getOfficeNumber() {
    return this.officeNumber
  }
  
 getRole() {
   return  "Manager"
 }
}




//  const man1 = new Manager("Abdullah", "420", "email@email.com", "5035451845");
//  console.log("---MANAGER---"); 
// man1.printInfo();
// man1.getEmail();
// man1.getPhone();

  module.exports = Manager; // not sure if I need to export sub classes