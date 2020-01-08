const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerQ = require("./lib/managerquestionset");
const engineerQ = require("./lib/engineerquestionset");
const internQ = require("./lib/internquestionset");

// const util = require("util");
const fs = require("fs");
const generateHTML = require("./generateHTML");

const managerArray = [];
const engineerArray = [];
const internArray = [];

askForManager = () => {
  return inquirer
    .prompt(managerQ)
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
        inquirer.prompt(engineerQ).then(engineer => {
          if (engineer.choice) {
            const eng = new Engineer(
              engineer.name,
              engineer.idnumber,
              engineer.email,
              engineer.github
            );
            engineerArray.push(eng);
            askForEmployee();
          } else {
            const eng = new Engineer(
              engineer.name,
              engineer.idnumber,
              engineer.email,
              engineer.github
            );
            engineerArray.push(eng);
                loopandwrite();
          }
        });
      } else {
        inquirer.prompt(internQ).then(intern => {
          if (intern.choice) {
            const int = new Intern(
              intern.name,
              intern.idnumber,
              intern.email,
              intern.school
            );
            internArray.push(int);
            askForEmployee();
          } else {
            const int = new Intern(
              intern.name,
              intern.idnumber,
              intern.email,
              intern.school
            );
            internArray.push(int);
            loopandwrite();
          }
        });
      }
    });
};

askForManager();


const loopandwrite = () => {

      // generate cards
      const internCards = internArray.map(employee => {
        return `<div class="card col col-sm-6">
                  <h3>${employee.name}</h3>
                  <h3>${employee.id}</h3>
                  <h3>${employee.email}</h3>
                  <h3>${employee.school}</h3>
                </div>`;
      });

      console.log(internCards);




                  // generate cards
    const engineerCards = engineerArray.map(employee => {
        return `<div class="card col col-sm-6">
                      <h3>${employee.name}</h3>
                      <h3>${employee.id}</h3>
                      <h3>${employee.email}</h3>
                      <h3>${employee.github}</h3>
                      </div>`;
      });

      console.log(engineerCards);

      // trigger next step for writing html
      html = generateHTML(managerArray, engineerCards, internCards);

      fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
          return console.log(err);
        }
      });

}

          