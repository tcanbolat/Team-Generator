const inquirer = require("inquirer");
const jest = require("jest");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

const fs = require('fs')



askForManager = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Manager's Name?",
                validate: function (val) {
                    return /[a-z]/i.test(val);
                }
            },
            {
                type: "input",
                name: "idnumber",
                message: this.name,
                validate: function (val) {
                    return /[1-9]/i.test(val);
                }                
            },
            {
                type: "input",
                name: "email",
                message: this.name,
                validate: function (val) {
                    return /[a-z1-9]/i.test(val);
                }
            },
            {
                type: "input",
                name: "officenumber",
                message: this.name,
                validate: function (val) {
                    return /[1-9]/i.test(val);
                }
            }

        ]).then(manager => {
            const manager1 = new Manager(manager.name, manager.idnumber, manager.email, manager.officenumber);
            console.log(manager1);
            console.log(manager1.getRole());
            // console.log(`Manager's Name: ${manager.name}`);
            // console.log(`Manager's ID#: ${manager.idnumber}`);
            // console.log(`Manager's email: ${manager.email}`);
            // console.log(`Manager's Office number: ${manager.officenumber}`);
        })
}




    askForManager();
 

