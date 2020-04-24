// Require Dependencies and Employee data
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const util = require("util");
const fs = require("fs");

// Returns fs.writeFile as a promise
const writeFileAsync = util.promisify(fs.writeFile);

// Output path and directory
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Require htmlRenderer.js file
const render = require("./lib/htmlRenderer");

// Employees array that will have objects
const employees = [];

// Renders the employees array of objects to team.html in utf-8 format
function buildHTML() {
    writeFileAsync(outputPath, render(employees), "utf-8")
        .then(response => {
            console.log("HTML succesfully rendered!")
        })
        .catch(err => {
            console.log(err);
        })
}

// Series of prompts for the user to answer, and the logic behind displaying the right information
const createTeam = async () => {
    try {
        const { name, role, id, email } = await inquirer.prompt([
            {   
                type: "input",
                name: "name",
                message: "Enter Team Member's Name:"
            },
            {
                type: "list",
                name: "role",
                message: "Select Team Member's Role:",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                name: "id",
                message: "Enter Team Member's ID:"
            },
            {
                type: "input",
                name: "email",
                message: "Enter Team Member's Email Address:"
            }])
        
        // If-else statement for the specific employee role and role info
        let roleSpecific = "";
        
        if (role === "Manager") {
            roleSpecific = "Office Number";
        } else if (role === "Engineer") {
            roleSpecific = "GitHub Username";
        } else {
            roleSpecific = "School Name";
        }
        
        // First prompt based on role info, and second prompt is for adding more employees depending on choice    
        const { roleInfo, addMember } = await inquirer.prompt([
            {
                type: "input",
                name: "roleInfo",
                message: `Enter Team Member's ${roleSpecific}:`
            },
            {
                type: "list",
                name: "addMember",
                message: "Would you like to add more team members?",
                choices: ["Yes", "No"]
            }])
            
        // Logic behind adding a new employee member and rendering the html based on provided info    
        let newMember;
        
        if (role === "Manager") {
            newMember = new Manager(name, id, email, roleInfo);
        } else if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
        } else {
            newMember = new Intern(name, id, email, roleInfo);
        }
                
        employees.push(newMember);
        
        if (addMember === "Yes") {
            createTeam();
        } else {
            buildHTML();
        }   

    } catch(err) {
        console.log(err);
    }
}

createTeam();