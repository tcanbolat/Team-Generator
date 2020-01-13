// Dependencies
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

// these arrays are here to hold the employee objects that will be created
const managerArray = [];
const engineerArray = [];
const internArray = [];


// this function starts the app, its called on line 95
// this function will start by obtaining the team Managers info
generateTeam = () => {
  log(chalk.magenta.bold(chalk.underline("\nHello! Welcome to Team Generator!")));
  log(chalk.magenta.bold("\nLets build your team starting with a team Manager\n"))
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
      log(chalk.magenta.bold('\nNext, add your first employee to the team\n'));
      askForEmployee(); // this runs the function on line 43, it runs after getting the managers info.
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
        inquirer.prompt(engineerQ).then(engineer => {  // engineerQ is referencing the engineerquestionset.js file located in the lib folder
          const eng = new Engineer( //creating a new Engineer constructor object obtained by the users input
            engineer.name,
            engineer.idnumber,
            engineer.email,
            engineer.github
          );

          engineerArray.push(eng); // pushing the created Engineer into the engineer array

          if (engineer.choice) { // this is referencing the answer to the last qustion in "engineerQ" 
                                // if they want to add another employee, run the function again
            askForEmployee();
          } else {  // if not then write the data from the arrays and create a team html
              loopandwrite(managerArray, internArray, engineerArray);
              log(chalk.magenta.bold("Your team has been generated in ./output/Team.html"));
          }
        });
      } else {
        inquirer.prompt(internQ).then(intern => { // this is if they choose to create an Intern instead, same structure as the engineer set
          const int = new Intern(
            intern.name,
            intern.idnumber,
            intern.email,
            intern.school
          );

          internArray.push(int);

          if (intern.choice) {
            askForEmployee();
          } else {
            loopandwrite(managerArray, internArray, engineerArray);
            log(chalk.magenta.bold("Your team has been generated in ./output/Team.html"));
          }
        });
      }
    });
};

generateTeam();



          