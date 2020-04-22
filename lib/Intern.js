// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// Require Employee data
const Employee = require("./Employee");

// Intern class that extends to Employee with a constructor and method functions
class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern";
    }
    
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;