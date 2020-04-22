// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Require Employee data
const Employee = require("./Employee");

// Engineer class that extends to Employee with a constructor and method functions
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer";
    }
    
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;