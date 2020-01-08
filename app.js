const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const util = require("util");
const fs = require("fs");
const generateHTML = require("./generateHTML");

const managerArray = [];
const employeeArray = [];

askForManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's Name?",
        validate: function(val) {
          return /[a-z]/i.test(val);
        }
      },
      {
        type: "input",
        name: "idnumber",
        message: this.name,
        validate: function(val) {
          return /[1-9]/i.test(val);
        }
      },
      {
        type: "input",
        name: "email",
        message: this.name,
        validate: function(val) {
          return /[a-z1-9]/i.test(val);
        }
      },
      {
        type: "input",
        name: "officenumber",
        message: this.name,
        validate: function(val) {
          return /[1-9]/i.test(val);
        }
      }
    ])
    .then(manager => {
      const man = new Manager(
        manager.name,
        manager.idnumber,
        manager.email,
        manager.officenumber
      );
      managerArray.push(man);
    })
    .then(() => {
      askForEmployee();
    });
};

askForEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeetype",
        message: "Type of Employee?",
        choices: ["Engineer", "Intern"]
      }
    ])
    .then(val => {
      if (val.employeetype === "Engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the Engineer's Name?",
              validate: function(val) {
                return /[a-z]/i.test(val);
              }
            },
            {
              type: "input",
              name: "idnumber",
              message: this.name,
              validate: function(val) {
                return /[1-9]/i.test(val);
              }
            },
            {
              type: "input",
              name: "email",
              message: this.name,
              validate: function(val) {
                return /[a-z1-9]/i.test(val);
              }
            },
            {
              type: "input",
              name: "github",
              message: this.name,
              validate: function(val) {
                return /[a-z1-9]/i.test(val);
              }
            },
            {
              type: "confirm",
              name: "choice",
              message: "add another employee?"
            }
          ])
          .then(engineer => {
            if (engineer.choice) {
              const eng = new Engineer(
                engineer.name,
                engineer.idnumber,
                engineer.email,
                engineer.github
              );
              employeeArray.push(eng);
              askForEmployee();
            } else {
              const eng = new Engineer(
                engineer.name,
                engineer.idnumber,
                engineer.email,
                engineer.github
              );
              employeeArray.push(eng);

              // generate cards
              const employeeCards = employeeArray.map(employee => {
                  return `<div class="card col col-sm-6">
                            <h3>${employee.name}</h3>
                            <h3>${employee.id}</h3>
                            <h3>${employee.email}</h3>
                            <h3>${employee.github}</h3>
                            </div>`;
                });
              
              console.log(employeeCards);

              // trigger next step for writing html
              html = generateHTML(managerArray, employeeCards);

              fs.writeFile("./output/team.html", html, function(err) {
                if (err) {
                  return console.log(err);
                }
              });
            }
          });
      } else {
        inquirer
          .prompt([
            {
              type: "input",
              name: "name",
              message: "What is the Intern's Name?",
              validate: function(val) {
                return /[a-z]/i.test(val);
              }
            },
            {
              type: "input",
              name: "idnumber",
              message: this.name,
              validate: function(val) {
                return /[1-9]/i.test(val);
              }
            },
            {
              type: "input",
              name: "email",
              message: this.name,
              validate: function(val) {
                return /[a-z1-9]/i.test(val);
              }
            },
            {
              type: "input",
              name: "school",
              message: this.name,
              validate: function(val) {
                return /[a-z1-9]/i.test(val);
              }
            },
            {
              type: "confirm",
              name: "choice",
              message: "add another employee?"
            }
          ])
          .then(intern => {
            if (intern.choice) {
              const int = new Intern(
                intern.name,
                intern.idnumber,
                intern.email,
                intern.school
              );
              employeeArray.push(int);
              askForEmployee();
            } else {
              const int = new Intern(
                intern.name,
                intern.idnumber,
                intern.email,
                intern.school
              );
              employeeArray.push(int);

              // trigger next step for writing html
              html = generateHTML(managerArray, employeeArray);

              fs.writeFile("./output/team.html", html, function(err) {
                if (err) {
                  return console.log(err);
                }
              });
            }
          });
      }
    });
};

askForManager();
