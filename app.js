const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

function buildHTML() {
    fs.writeFileSync(outputPath, render(employees), "utf-8")
    console.log("HTML succesfully rendered!")
}

function createTeam() {
    inquirer.prompt([{
        message: "Enter Team Member's Name:",
        name: "name"
    },
    {
        type: "list",
        name: "role",
        message: "Select Team Member's role:",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        message: "Enter Team Member's ID:",
        name: "id"
    },
    {
        message: "Enter Team Member's Email Address:",
        name: "email"
    }])
    .then(({ name, role, id, email }) => {
        let roleInfo = "";

        if (role === "Manager") {
            roleInfo = "Office Number";
        } else if (role === "Engineer") {
            roleInfo = "GitHub Username";
        } else {
            roleInfo = "School Name";
        }

        inquirer.prompt([{
            message: `Enter Team Member's ${roleInfo}:`,
            name: "roleInfo"
        },
        {
            type: "list",
            name: "moreMembers",
            message: "Would you like to add more team members?",
            choices: ["Yes", "No"]
        }])
        .then(({ roleInfo, moreMembers }) => {
            let newMember;

            if (role === "Manager") {
                newMember = new Manager(name, id, email, roleInfo);
            } else if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else {
                newMember = new Intern(name, id, email, roleInfo);
            }
           
            employees.push(newMember);

            if (moreMembers === "Yes") {
                createTeam();
            } else {
                buildHTML();
            }   
        });
    });
}

createTeam();