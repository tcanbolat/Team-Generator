const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github
  }

  getRole() {
    return "Engineer"
  }

}

// const en1 = new Engineer("Anil", "engineer", "Anil1992-rgb");
// console.log("---ENGINEER---");
// en1.printInfo();
// en1.getGithub();
// en1.getRole();

module.exports = Engineer;