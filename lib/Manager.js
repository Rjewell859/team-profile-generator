const Employee = require('./Employee')

// Requires employee to inherit base attributes

class Manager extends Employee {

    // Overwriting getRole()

    getRole() {
        return 'Manager';
    }

    getOffice() {
        return this.office;
    }

    // Constructor function

    constructor(employeeName, id, email, officeNumber) {
        const office = officeNumber;

        super(employeeName, id, email);
        this.employeeName = employeeName
        this.id = id;
        this.email = email;
        this.office = office;



    }
}

// Exporting for use in index.js

module.exports = Manager;