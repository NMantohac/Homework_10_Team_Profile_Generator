// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// Require Employee data
const Employee = require ("./Employee");

// Manage class that extends to Employee with a constructor and method functions
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;