const Employee = require('./Employee')

// Requires employee to inherit base attributes

class Intern extends Employee {

    // Overwriting get role()

    getRole() {
        return 'Intern';
    }

    // New function for intern

    getSchool() {
        return this.school;
    }
    constructor(employeeName, id, email, internSchool) {
        const school = internSchool;

        super(employeeName, id, email);
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
        this.school = school;


    }
}

// Exporting for use in index.js

module.exports = Intern;