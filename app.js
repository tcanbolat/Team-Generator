const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const managerQ = require("./lib/managerquestionset");
const engineerQ = require("./lib/engineerquestionset");
const internQ = require("./lib/internquestionset");
// const loopandwrite = require("./lib/loopandwrite");
const fs = require("fs");
const chalk = require("chalk");
const generateHTML = require("./lib/generateHTML");
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
                loopandwrite();
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
            loopandwrite();
            log(chalk.magenta.bold("Your team has been generated in ./output/Team.html"));
          }
        });
      }
    });
};

askForManager();


const loopandwrite = () => {

                  // generate Intern cards
      const internCards = internArray.map(employee => {
        return `<div class="card text-white shadow-lg" style="max-width: 18rem;">
        <div class="card-header bg-primary">
          <h3>${employee.name}</h3>
          <h4><i class="fas fa-graduation-cap"></i> ${employee.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
          <div class="card shadow-sm">
            <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
            <li class="list-group-item">School: ${employee.school}</li>
          </ul>
        </div>
        </div>
      </div>`
      });

                  // generate Engineer cards
    const engineerCards = engineerArray.map(employee => {
        return `<div class="card text-white shadow-lg" style="max-width: 18rem;">
        <div class="card-header bg-primary">
          <h3>${employee.name}</h3>
          <h4><i class="fas fa-glasses"></i> ${employee.getRole()}</h4>
        </div>
        <div class="card-body bg-light">
          <div class="card shadow-sm">
            <ul class="list-group list-group-flush text-dark">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
          </ul>
        </div>
        </div>
      </div>`
      });

      // trigger next step for writing html
      html = generateHTML(managerArray, engineerCards, internCards);

      fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
          return log(err);
        }
      });

}

          