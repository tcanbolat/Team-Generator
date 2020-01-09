const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerQ = require("./lib/managerquestionset");
const engineerQ = require("./lib/engineerquestionset");
const internQ = require("./lib/internquestionset");
const loopandwrite = require("./lib/loopandwrite");
const chalk = require("chalk");
const log = console.log;
const managerArray = [];
const engineerArray = [];
const internArray = [];

askForManager = () => {
  log(chalk.magenta.bold(" - " + chalk.underline("HELLO!") + " - Let's start with the Team Manager."));
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
      log(chalk.magenta.bold(' - Next, choose an Employee'));
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
                loopandwrite(managerArray, internArray, engineerArray);
                log(chalk.magenta.bold("Your team has been generated in ./output/Team.html"));
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
            loopandwrite(managerArray, internArray, engineerArray);
            log(chalk.magenta.bold("Your team has been generated in ./output/Team.html"));
          }
        });
      }
    });
};

askForManager();



          